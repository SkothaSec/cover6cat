import { contact } from "../../data";

export const Contact = () => {
    return(
        <div>
          <h1>Contact</h1>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
        </div>
    )
}