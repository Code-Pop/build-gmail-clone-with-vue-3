import { reactive } from "@vue/reactivity"
import axios from "axios"

const emails = reactive(new Set());

export const useEmailSelection = function () {
  let toggle = (email) => {
    if (emails.has(email)) {
      emails.delete(email);
    } else {
      emails.add(email);
    }

  };
  const clear = () => {
    emails.clear();
  }
  const addMultiple = (newEmails) => {
    newEmails.forEach(element => {
      emails.add(element)
    });
  }

  let forSelected = (fn) => {
    emails.forEach((email) => {
      fn(email);
      axios.put(`http://localhost:3000/emails/${email.id}`, email);
    })
  }
  const markRead = () => forSelected((e) => e.read = true)
  const markUnread = () => forSelected((e) => e.read = false)
  const archive = () => { forSelected((e) => e.archived = true); clear() }

  return {
    emails,
    toggle,
    clear,
    addMultiple,
    markRead,
    markUnread,
    archive
  }
}
export default useEmailSelection