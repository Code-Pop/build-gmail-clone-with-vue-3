<template>
  <div class="bulk-action-bar">
    <span class="checkbox">
      <input
        type="checkbox"
        :checked="allEmailSelected"
        :class="[someEmailSelected ? 'partial-check' : '']"
        @click="bulkSelect"
      />
    </span>
    <span class="buttons">
      <button
        @click="emailSelection.markRead()"
        :disabled="[...emailSelection.emails].every((e) => e.read)"
      >
        Mark Read
      </button>
      <button
        @click="emailSelection.markUnread()"
        :disabled="[...emailSelection.emails].every((e) => !e.read)"
      >
        Mark Unread
      </button>
      <button
        @click="emailSelection.archive()"
        :disabled="numberSelected === 0"
      >
        Mark Archive
      </button>
    </span>
  </div>
</template>

<script>
import useEmailSelection from "@/composables/use-email-selection.js";
import { computed } from "@vue/reactivity";
export default {
  setup(props) {
    const emailSelection = useEmailSelection();
    let numberSelected = computed(() => emailSelection.emails.size);
    let numberEmails = computed(() => props.emails.length);

    let allEmailSelected = computed(
      () => numberSelected.value === numberEmails.value
    );
    const someEmailSelected = computed(
      () =>
        numberSelected.value > 0 && numberSelected.value < numberEmails.value
    );

    const bulkSelect = () => {
      if (allEmailSelected.value) {
        emailSelection.clear();
      } else {
        emailSelection.addMultiple(props.emails);
      }
    };

    return {
      allEmailSelected,
      someEmailSelected,
      bulkSelect,
      emailSelection,
      numberSelected,
    };
  },
  props: {
    emails: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>