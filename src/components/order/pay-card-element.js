// import React, { useState } from "react";
// import { useRouter } from "next/router"; // Sử dụng để điều hướng người dùng

// const PaymentCardElement = ({ cart_products, isCheckoutSubmit }) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const router = useRouter(); // Để điều hướng tới trang thanh toán thành công

//   // Hàm xử lý khi nhấn nút "Place order"
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setError(null);

//     try {
//       // Gửi yêu cầu tạo đơn hàng đến backend
//       const response = await fetch("http://localhost:5000//api/order/addOrder", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           cart_products, // Thông tin giỏ hàng
//           customer_name: "John Doe", // Ví dụ, bạn có thể thay bằng thông tin từ hệ thống đăng nhập
//           total_amount: 10000, // Tổng số tiền thanh toán
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create order");
//       }

//       const result = await response.json();

//       // Điều hướng đến trang thanh toán thành công sau khi đơn hàng được tạo
//       router.push(`/order/success`);
//     } catch (error) {
//       setError("There was an error processing your order.");
//       console.error("Error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="my-2">
//       <div className="order-button-payment mt-25">
//         <button
//           type="submit"
//           className="tp-btn"
//           onClick={handleSubmit} // Thực hiện hàm handleSubmit khi nhấn nút
//           disabled={cart_products.length === 0 || isCheckoutSubmit || isSubmitting}
//         >
//           {isSubmitting ? "Processing..." : "Place order"}
//         </button>
//       </div>
//       {error && (
//         <p className="mt-15" style={{ color: "red" }}>
//           {error}
//         </p>
//       )}
//     </div>
//   );
// };

// export default PaymentCardElement;



import React, { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
// import paymentImage from '/card.jpg';


const PaymentCardElement = ({ stripe, cardError, cart_products,isCheckoutSubmit }) => {
  return (
    <div className="my-2">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="order-button-payment mt-25">
        <button
          type="submit"
          className="tp-btn"
          disabled={!stripe || cart_products.length === 0 || isCheckoutSubmit}
        >
          Place order
        </button>
      </div>
      <div>
        Hãy nhập:
        5575 0100 0008 3512 | 09/28 | 324 Để bỏ qua phần thanh toán qua card  
      </div>
      <div className="image-container" style={{ marginTop: "20px", textAlign: "center" }}>
        <img 
          src="https://huyvu15.github.io/img/card.png"  // Đường dẫn URL của hình ảnh
          alt="Payment illustration"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <div>
        <br></br>
        Vui lòng chuyển khoản thông qua qr này, chúng tôi sẽ check và gửi tới bạn món hàng trong thời gian sớm nhất. Cảm ơn bạn nhiều !
      </div>
      {cardError && (
        <p className="mt-15" style={{ color: "red" }}>
          {cardError}
        </p>
      )}
    </div>
  );
};

export default PaymentCardElement;