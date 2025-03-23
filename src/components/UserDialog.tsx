import * as Dialog from "@radix-ui/react-dialog";
import { User } from "../types/User";
import "../styles/userDialog.css";

export function UserDialog({ user }: { user: User }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="user-card">
          <div className="user-id">{user.id}</div>
          <div className="user-info">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-username">@{user.username}</p>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
      <Dialog.Overlay className="dialog-overlay" />

      <Dialog.Content className="dialog-content">
          <div className="dialog-header">
            <Dialog.Title className="dialog-title">{user.name}</Dialog.Title>
            <Dialog.Description className="dialog-description">
              @{user.username} · {user.email}
            </Dialog.Description>
          </div>

          <div className="dialog-body">
            <section className="dialog-section">
              <h3 className="section-title">Address</h3>
              <p>{user.address.street}, {user.address.suite}</p>
              <p>{user.address.city}, {user.address.zipcode}</p>
              <p>Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
            </section>

            <section className="dialog-section">
              <h3 className="section-title">Contact</h3>
              <p>Phone: {user.phone}</p>
              <p>Website: <a href={`https://${user.website}`} target="_blank">{user.website}</a></p>
            </section>

            <section className="dialog-section">
              <h3 className="section-title">Company</h3>
              <p>{user.company.name}</p>
              <p>{user.company.catchPhrase}</p>
              <p>{user.company.bs}</p>
            </section>
          </div>

          <Dialog.Close asChild>
            <button className="dialog-close-button">
              Close
            </button>
          </Dialog.Close>

      </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}