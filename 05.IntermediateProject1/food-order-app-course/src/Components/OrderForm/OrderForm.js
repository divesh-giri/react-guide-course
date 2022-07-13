import Input from "../UI/Input";
import Modal from "../UI/Modal";

const OrderForm = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <form>
        <Input
          label="Name"
          input={{
            type: "text",
            placeholder: "Enter your name",
          }}
        />
        <Input
          label="Email"
          input={{
            type: "email",
          }}
        />
        <Input
          label="Address"
          input={{ type: "textbox", placeholder: "Enter your address" }}
        />
        <h3>Order Value: {props.totalAmount}</h3>
        <button type="submit">Submit Order</button>
      </form>
    </Modal>
  );
};

export default OrderForm;
