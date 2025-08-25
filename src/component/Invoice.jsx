import React, { useState } from "react";
import "./invoice.css";

export default function InvoicePage() {
  const [invoiceData, setInvoiceData] = useState({
    items: [
      {
        sn: 1,
        description: "Chikanakari Embroidered Salwar Suit (Pink)",
        size: "S, M, L, XL",
        hsn: "6204",
        qty: 24.0,
        unit: "PCS",
        price: 1899.0,
        amount: 45576.0,
        isEditing: false,
      },
      {
        sn: 2,
        description: "Anarkali Style Cotton Suit (Blue)",
        size: "M, L, XL",
        hsn: "6204",
        qty: 12.0,
        unit: "PCS",
        price: 1499.0,
        amount: 17988.0,
        isEditing: false,
      },
      {
        sn: 3,
        description: "Designer Palazzo Suit (Mint Green)",
        size: "S, M, L",
        hsn: "6204",
        qty: 18.0,
        unit: "PCS",
        price: 2199.0,
        amount: 39582.0,
        isEditing: false,
      },
      {
        sn: 4,
        description: "Heavy Work Patiala Suit (Maroon)",
        size: "M, L, XL",
        hsn: "6204",
        qty: 6.0,
        unit: "PCS",
        price: 2399.0,
        amount: 14394.0,
        isEditing: false,
      },
      {
        sn: 5,
        description: "Printed Cotton Daily Wear Suit (Yellow)",
        size: "XS, S, M, L, XL",
        hsn: "6204",
        qty: 30.0,
        unit: "PCS",
        price: 999.0,
        amount: 29970.0,
        isEditing: false,
      },
    ],
  });

  // Handle input change
  const handleChange = (index, field, value) => {
    const updated = [...invoiceData.items];
    updated[index][field] = value;
    updated[index].amount = updated[index].qty * updated[index].price; // recalc
    setInvoiceData({ ...invoiceData, items: updated });
  };

  // Toggle edit mode
  const toggleEdit = (index, editing) => {
    const updated = [...invoiceData.items];
    updated[index].isEditing = editing;
    setInvoiceData({ ...invoiceData, items: updated });
  };

  // Add a new row
  const addRow = () => {
    const newRow = {
      sn: invoiceData.items.length + 1,
      description: "",
      size: "",
      hsn: "",
      qty: 0,
      unit: "PCS",
      price: 0,
      amount: 0,
      isEditing: true, // new rows open in edit mode
    };
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, newRow],
    });
  };

 
  return (
    <div className="invoice-container">
      {/* Header */}
      <div className="invoice-header">
        <div className="company-info">
          <h2>MAHAKALI ETHNIC COLLECTION</h2>
          <p>
            Shop No. 25, Indore, MP - 452001 | +91-9876543210 |
            mahakali.ethnic@gmail.com
          </p>
          <p>GSTIN: 23AA******1Z7</p>
        </div>
        <div className="invoice-label">
          <div className="logo">MEC</div>
          <span className="tax-invoice">TAX INVOICE</span>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="invoice-details">
        <div>
          <p>
            <strong>Invoice No.:</strong> ME/2023-24/256
          </p>
          <p>
            <strong>Dated:</strong> 15-09-2023
          </p>
        </div>
        <div>
          <p>
            <strong>Place of Supply:</strong> Madhya Pradesh (23)
          </p>
          <p>
            <strong>Reverse Charge:</strong> N
          </p>
        </div>
      </div>

      {/* Billing + Shipping */}
      <div className="billing-shipping">
        <div>
          <h4>Bill to:</h4>
          <p>Fashion Paradise</p>
          <p>32, New Market, Bhopal, MP - 462001</p>
          <p>GSTIN/UIN: 23AA******1Z7</p>
        </div>
        <hr />
        <div>
          <h4>Shipped to:</h4>
          <p>Fashion Paradise</p>
          <p>32, New Market, Bhopal, MP - 462001</p>
          <p>GSTIN/UIN: 23AA******1Z7</p>
        </div>
      </div>

      {/* Items Table */}
      <table className="items-table">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Description of Goods</th>
            <th>Size</th>
            <th>HSN/SAC</th>
            <th>Qty.</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Amount (₹)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index}>
              <td>{item.sn}</td>

              {item.isEditing ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) =>
                        handleChange(index, "description", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.size}
                      onChange={(e) =>
                        handleChange(index, "size", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.hsn}
                      onChange={(e) =>
                        handleChange(index, "hsn", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.qty}
                      onChange={(e) =>
                        handleChange(index, "qty", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.unit}
                      onChange={(e) =>
                        handleChange(index, "unit", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) =>
                        handleChange(index, "price", e.target.value)
                      }
                    />
                  </td>
                  <td>{(item.qty * item.price).toFixed(2)}</td>
                  <td>
                    <button onClick={() => toggleEdit(index, false)}>
                      💾 Save
                    </button>
                    <button
                      onClick={() => deleteRow(index)}
                      style={{ marginLeft: "6px" }}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.description}</td>
                  <td>{item.size}</td>
                  <td>{item.hsn}</td>
                  <td>{item.qty}</td>
                  <td>{item.unit}</td>
                  <td>{item.price}</td>
                  <td>{item.amount.toFixed(2)}</td>
                  <td>
                    <button onClick={() => toggleEdit(index, true)}>✏️ Edit</button>
                  </td>
                 
                </>
              )}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              className="no-print"
              colSpan="9"
              style={{ textAlign: "center" }}
            >
              <button onClick={addRow}>➕ Add Row</button>
            </td>
          </tr>
        </tfoot>
      </table>

      {/* Summary Section */}
      <div className="summary-section">
        <div className="invoice-summary">
          <h4>Invoice Summary</h4>
          <p>Less : Discount @ 10% — 14751.00</p>
          <p>Add : SGST @ 6.00% — 7965.54</p>
          <p>Add : CGST @ 6.00% — 7965.54</p>
          <p>Less : Rounded Off (-) 0.08</p>
          <h4>Grand Total: ₹148690.00</h4>
          <p>Rupees One Lakh Forty Eight Thousand Six Hundred Ninety Only</p>
        </div>
        <div className="tax-summary">
          <h4>Tax Summary</h4>
          <table>
            <thead>
              <tr>
                <th>Tax Rate</th>
                <th>Taxable</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>Total Tax</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12%</td>
                <td>132759.00</td>
                <td>7965.54</td>
                <td>7965.54</td>
                <td>15931.08</td>
              </tr>
            </tbody>
          </table>
          <div className="bank-qr">
            <div className="bank-details">
              <h4>Bank Details</h4>
              <p>
                Name: MAHAKALI ETHNIC COLLECTION <br />
                A/C: 1234567890123456 <br />
                IFSC: SBIN0012345 <br />
                Bank: State Bank of India <br />
                Branch: M.G. Road, Indore
              </p>
            </div>
            <div className="qr">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=mahakali.ethnic@upi"
                alt="QR"
              />
              <p>Scan to pay via UPI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="terms">
        <h4>Terms & Conditions:</h4>
        <ol>
          <li>E & O.E.</li>
          <li>Goods once sold will not be taken back.</li>
          <li>
            Interest @ 18% p.a. will be charged if the payment is not made
            within the stipulated time.
          </li>
          <li>
            All disputes are subject to “Indore, Madhya Pradesh” Jurisdiction
            only.
          </li>
          <li>
            Returns accepted only within 7 days of delivery with packaging.
          </li>
        </ol>
      </div>

      {/* Signatures */}
      <div className="signatures">
        <div>
          <p>Receiver’s Signature:</p>
        </div>
        <div className="auth-sign">
          <p>For MAHAKALI ETHNIC COLLECTION</p>
          <br />
          <p>Authorised Signatory</p>
        </div>
      </div>

      {/* Save + Print Buttons */}
      <div
        className="no-print"
        style={{ marginTop: "20px", textAlign: "center" }}
      >
        <button
          onClick={() => {
            localStorage.setItem("invoiceData", JSON.stringify(invoiceData));
            alert("Invoice saved locally ✅");
          }}
          style={{
            background: "#2a5783",
            color: "white",
            padding: "8px 16px",
            marginRight: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Save
        </button>

        <button
          onClick={() => window.print()}
          style={{
            background: "#0d6efd",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Print
        </button>
      </div>
    </div>
  );
}

// import React from "react";
// import "./invoice.css";
// import { useState } from "react";

// export default function InvoicePage() {

//   const [invoiceData, setInvoiceData] = useState({
//   items: [
//     {
//       sn: 1,
//       description: "Chikanakari Embroidered Salwar Suit (Pink)",
//       size: "S, M, L, XL",
//       hsn: "6204",
//       qty: 24.0,
//       unit: "PCS",
//       price: 1899.0,
//       amount: 45576.0,
//       isEditing: false,
//     },
//     {
//       sn: 2,
//       description: "Anarkali Style Cotton Suit (Blue)",
//       size: "M, L, XL",
//       hsn: "6204",
//       qty: 12.0,
//       unit: "PCS",
//       price: 1499.0,
//       amount: 17988.0,
//       isEditing: false,
//     },
//     {
//       sn: 3,
//       description: "Designer Palazzo Suit (Mint Green)",
//       size: "S, M, L",
//       hsn: "6204",
//       qty: 18.0,
//       unit: "PCS",
//       price: 2199.0,
//       amount: 39582.0,
//       isEditing: false,
//     },
//     {
//       sn: 4,
//       description: "Heavy Work Patiala Suit (Maroon)",
//       size: "M, L, XL",
//       hsn: "6204",
//       qty: 6.0,
//       unit: "PCS",
//       price: 2399.0,
//       amount: 14394.0,
//       isEditing: false,
//     },
//     {
//       sn: 5,
//       description: "Printed Cotton Daily Wear Suit (Yellow)",
//       size: "XS, S, M, L, XL",
//       hsn: "6204",
//       qty: 30.0,
//       unit: "PCS",
//       price: 999.0,
//       amount: 29970.0,
//       isEditing: false,
//     },
//   ],
// });

// // Handle input change
// const handleChange = (index, field, value) => {
//   const updated = [...invoiceData.items];
//   updated[index][field] = value;
//   updated[index].amount = updated[index].qty * updated[index].price; // recalc
//   setInvoiceData({ ...invoiceData, items: updated });
// };

// // Toggle edit mode
// const toggleEdit = (index, editing) => {
//   const updated = [...invoiceData.items];
//   updated[index].isEditing = editing;
//   setInvoiceData({ ...invoiceData, items: updated });
// };

// // Add a new row
// const addRow = () => {
//   const newRow = {
//     sn: invoiceData.items.length + 1,
//     description: "",
//     size: "",
//     hsn: "",
//     qty: 0,
//     unit: "PCS",
//     price: 0,
//     amount: 0,
//     isEditing: true, // new rows open in edit mode
//   };
//   setInvoiceData({
//     ...invoiceData,
//     items: [...invoiceData.items, newRow],
//   });
// };

// // Delete a row
// const deleteRow = (index) => {
//   const updated = invoiceData.items.filter((_, i) => i !== index);
//   // Recalculate serial numbers (S.N.)
//   const reIndexed = updated.map((item, i) => ({ ...item, sn: i + 1 }));
//   setInvoiceData({ ...invoiceData, items: reIndexed });
// };

//     return (
//     <div className="invoice-container">
//       {/* Header */}
//       <div className="invoice-header">
//         <div className="company-info">
//           <h2>MAHAKALI ETHNIC COLLECTION</h2>
//           <p>
//             Shop No. 25, Indore, MP - 452001 | +91-9876543210 |
//             mahakali.ethnic@gmail.com
//           </p>
//           <p>GSTIN: 23AA******1Z7</p>
//         </div>
//         <div className="invoice-label">
//           <div className="logo">MEC</div>
//           <span className="tax-invoice">TAX INVOICE</span>
//         </div>
//       </div>

//       {/* Invoice Details */}
//       <div className="invoice-details">
//         <div>
//           <p>
//             <strong>Invoice No.:</strong> ME/2023-24/256
//           </p>
//           <p>
//             <strong>Dated:</strong> 15-09-2023
//           </p>
//         </div>
//         <div>
//           <p>
//             <strong>Place of Supply:</strong> Madhya Pradesh (23)
//           </p>
//           <p>
//             <strong>Reverse Charge:</strong> N
//           </p>
//         </div>
//       </div>

//       {/* Billing + Shipping */}
//       <div className="billing-shipping">
//         <div>
//           <h4>Bill to:</h4>
//           <p>Fashion Paradise</p>
//           <p>32, New Market, Bhopal, MP - 462001</p>
//           <p>GSTIN/UIN: 23AA******1Z7</p>
//         </div>
//         <hr />
//         <div>
//           <h4>Shipped to:</h4>
//           <p>Fashion Paradise</p>
//           <p>32, New Market, Bhopal, MP - 462001</p>
//           <p>GSTIN/UIN: 23AA******1Z7</p>
//         </div>
//       </div>

//       {/* Items Table */}
//       <table className="items-table">
//         <thead>
//           <tr>
//             <th>S.N.</th>
//             <th>Description of Goods</th>
//             <th>Size</th>
//             <th>HSN/SAC</th>
//             <th>Qty.</th>
//             <th>Unit</th>
//             <th>Price</th>
//             <th>Amount (₹)</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {invoiceData.items.map((item, index) => (
//             <tr key={index}>
//               <td>{item.sn}</td>

//               {item.isEditing ? (
//                 <>
//                   <td>
//                     <input
//                       type="text"
//                       value={item.description}
//                       onChange={(e) =>
//                         handleChange(index, "description", e.target.value)
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       value={item.size}
//                       onChange={(e) => handleChange(index, "size", e.target.value)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       value={item.hsn}
//                       onChange={(e) => handleChange(index, "hsn", e.target.value)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="number"
//                       value={item.qty}
//                       onChange={(e) => handleChange(index, "qty", e.target.value)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       value={item.unit}
//                       onChange={(e) => handleChange(index, "unit", e.target.value)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="number"
//                       value={item.price}
//                       onChange={(e) => handleChange(index, "price", e.target.value)}
//                     />
//                   </td>
//                   <td>{(item.qty * item.price).toFixed(2)}</td>
//                   <td>
//                     <button onClick={() => toggleEdit(index, false)}>💾 Save</button>
//                   </td>
//                 </>
//               ) : (
//                 <>
//                   <td>{item.description}</td>
//                   <td>{item.size}</td>
//                   <td>{item.hsn}</td>
//                   <td>{item.qty}</td>
//                   <td>{item.unit}</td>
//                   <td>{item.price}</td>
//                   <td>{item.amount.toFixed(2)}</td>
//                   <td>
//                     <button onClick={() => toggleEdit(index, true)}>✏️ Edit</button>
//                   </td>
//                 </>
//               )}
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td className="no-print"
//              colSpan="9" style={{ textAlign: "center" }}>
//               <button onClick={addRow}>➕ Add Row</button>
//             </td>
//           </tr>
//         </tfoot>
//       </table>

//       {/* Summary Section */}
//       <div className="summary-section">
//         <div className="invoice-summary">
//           <h4>Invoice Summary</h4>
//           <p>Less : Discount @ 10% — 14751.00</p>
//           <p>Add : SGST @ 6.00% — 7965.54</p>
//           <p>Add : CGST @ 6.00% — 7965.54</p>
//           <p>Less : Rounded Off (-) 0.08</p>
//           <h4>Grand Total: ₹148690.00</h4>
//           <p>Rupees One Lakh Forty Eight Thousand Six Hundred Ninety Only</p>
//         </div>
//         <div className="tax-summary">
//           <h4>Tax Summary</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>Tax Rate</th>
//                 <th>Taxable</th>
//                 <th>CGST</th>
//                 <th>SGST</th>
//                 <th>Total Tax</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>12%</td>
//                 <td>132759.00</td>
//                 <td>7965.54</td>
//                 <td>7965.54</td>
//                 <td>15931.08</td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="bank-qr">
//             <div className="bank-details">
//               <h4>Bank Details</h4>
//               <p>
//                 Name: MAHAKALI ETHNIC COLLECTION <br />
//                 A/C: 1234567890123456 <br />
//                 IFSC: SBIN0012345 <br />
//                 Bank: State Bank of India <br />
//                 Branch: M.G. Road, Indore
//               </p>
//             </div>
//             <div className="qr">
//               <img
//                 src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=mahakali.ethnic@upi"
//                 alt="QR"
//               />
//               <p>Scan to pay via UPI</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Terms */}
//       <div className="terms">
//         <h4>Terms & Conditions:</h4>
//         <ol>
//           <li>E & O.E.</li>
//           <li>Goods once sold will not be taken back.</li>
//           <li>
//             Interest @ 18% p.a. will be charged if the payment is not made
//             within the stipulated time.
//           </li>
//           <li>
//             All disputes are subject to “Indore, Madhya Pradesh” Jurisdiction
//             only.
//           </li>
//           <li>
//             Returns accepted only within 7 days of delivery with packaging.
//           </li>
//         </ol>
//       </div>

//       {/* Signatures */}
//       <div className="signatures">
//         <div>
//           <p>Receiver’s Signature:</p>
//         </div>
//         <div className="auth-sign">
//           <p>For MAHAKALI ETHNIC COLLECTION</p>
//           <br />
//           <p>Authorised Signatory</p>
//         </div>
//       </div>

//       {/* Save + Print Buttons */}
//       <div  className="no-print"
//        style={{ marginTop: "20px", textAlign: "center" }}>
//         <button
//           onClick={() => {
//             localStorage.setItem("invoiceData", JSON.stringify(invoiceData));
//             alert("Invoice saved locally ✅");
//           }}
//           style={{
//             background: "#2a5783",
//             color: "white",
//             padding: "8px 16px",
//             marginRight: "10px",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Save
//         </button>

//         <button
//           onClick={() => window.print()}
//           style={{
//             background: "#0d6efd",
//             color: "white",
//             padding: "8px 16px",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Print
//         </button>
//       </div>
//     </div>
//   );

// }

// import React from "react";
// import "./invoice.css";
// import { useState } from "react";

// export default function InvoicePage() {

//   const [invoiceData, setInvoiceData] = useState({
//   items: [
//     {
//       sn: 1,
//       description: "Chikanakari Embroidered Salwar Suit (Pink)",
//       size: "S, M, L, XL",
//       hsn: "6204",
//       qty: 24.0,
//       unit: "PCS",
//       price: 1899.0,
//       amount: 45576.0,
//       isEditing: false,
//     },
//     {
//       sn: 2,
//       description: "Anarkali Style Cotton Suit (Blue)",
//       size: "M, L, XL",
//       hsn: "6204",
//       qty: 12.0,
//       unit: "PCS",
//       price: 1499.0,
//       amount: 17988.0,
//       isEditing: false,
//     },
//   ],
// });

// // Handle input change
// const handleChange = (index, field, value) => {
//   const updated = [...invoiceData.items];
//   updated[index][field] = value;
//   updated[index].amount = updated[index].qty * updated[index].price; // recalc
//   setInvoiceData({ ...invoiceData, items: updated });
// };

// // Toggle edit mode
// const toggleEdit = (index, editing) => {
//   const updated = [...invoiceData.items];
//   updated[index].isEditing = editing;
//   setInvoiceData({ ...invoiceData, items: updated });
// };

// // Add a new row
// const addRow = () => {
//   const newRow = {
//     sn: invoiceData.items.length + 1,
//     description: "",
//     size: "",
//     hsn: "",
//     qty: 0,
//     unit: "PCS",
//     price: 0,
//     amount: 0,
//     isEditing: true, // new rows open in edit mode
//   };
//   setInvoiceData({
//     ...invoiceData,
//     items: [...invoiceData.items, newRow],
//   });
// };

//   return (
//     <div className="invoice-container">
//       {/* Header */}
//       <div className="invoice-header">
//         <div className="company-info">
//           <h2>MAHAKALI ETHNIC COLLECTION</h2>
//           <p>
//             Shop No. 25, Indore, MP - 452001 | +91-9876543210 |
//             mahakali.ethnic@gmail.com
//           </p>
//           <p>GSTIN: 23AA******1Z7</p>
//         </div>
//         <div className="invoice-label">
//           <div className="logo">MEC</div>
//           <span className="tax-invoice">TAX INVOICE</span>
//         </div>
//       </div>

//       {/* Invoice Details */}
//       <div className="invoice-details">
//         <div>
//           <p>
//             <strong>Invoice No.:</strong> ME/2023-24/256
//           </p>
//           <p>
//             <strong>Dated:</strong> 15-09-2023
//           </p>
//         </div>
//         <div>
//           <p>
//             <strong>Place of Supply:</strong> Madhya Pradesh (23)
//           </p>
//           <p>
//             <strong>Reverse Charge:</strong> N
//           </p>
//         </div>
//       </div>

//       {/* Billing + Shipping */}
//       <div className="billing-shipping">
//         <div>
//           <h4>Bill to:</h4>
//           <p>Fashion Paradise</p>
//           <p>32, New Market, Bhopal, MP - 462001</p>
//           <p>GSTIN/UIN: 23AA******1Z7</p>
//         </div>
//         <div>
//           <h4>Shipped to:</h4>
//           <p>Fashion Paradise</p>
//           <p>32, New Market, Bhopal, MP - 462001</p>
//           <p>GSTIN/UIN: 23AA******1Z7</p>
//         </div>
//       </div>

//       {/* Items Table */}
//       <table className="items-table">
//         <thead>
//           <tr>
//             <th>S.N.</th>
//             <th>Description of Goods</th>
//             <th>Size</th>
//             <th>HSN/SAC</th>
//             <th>Qty.</th>
//             <th>Unit</th>
//             <th>Price</th>
//             <th>Amount (₹)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>Chikanakari Embroidered Salwar Suit (Pink)</td>
//             <td>S, M, L, XL</td>
//             <td>6204</td>
//             <td>24.00</td>
//             <td>PCS</td>
//             <td>1899.00</td>
//             <td>45576.00</td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>Anarkali Style Cotton Suit (Blue)</td>
//             <td>M, L, XL</td>
//             <td>6204</td>
//             <td>12.00</td>
//             <td>PCS</td>
//             <td>1499.00</td>
//             <td>17988.00</td>
//           </tr>
//           <tr>
//             <td>3</td>
//             <td>Designer Palazzo Suit (Mint Green)</td>
//             <td>S, M, L</td>
//             <td>6204</td>
//             <td>18.00</td>
//             <td>PCS</td>
//             <td>2199.00</td>
//             <td>39582.00</td>
//           </tr>
//           <tr>
//             <td>4</td>
//             <td>Heavy Work Patiala Suit (Maroon)</td>
//             <td>M, L, XL</td>
//             <td>6204</td>
//             <td>6.00</td>
//             <td>PCS</td>
//             <td>2399.00</td>
//             <td>14394.00</td>
//           </tr>
//           <tr>
//             <td>5</td>
//             <td>Printed Cotton Daily Wear Suit (Yellow)</td>
//             <td>XS, S, M, L, XL</td>
//             <td>6204</td>
//             <td>30.00</td>
//             <td>PCS</td>
//             <td>999.00</td>
//             <td>29970.00</td>
//           </tr>
//         </tbody>
//         <tfoot>
//           <tr>
//             <td colSpan="4"></td>
//             <td>Total</td>
//             <td>90.00</td>
//             <td>PCS</td>
//             <td>147510.00</td>
//           </tr>
//         </tfoot>
//       </table>

//       {/* Summary Section */}
//       <div className="summary-section">
//         <div className="invoice-summary">
//           <h4>Invoice Summary</h4>
//           <p>Less : Discount @ 10% — 14751.00</p>
//           <p>Add : SGST @ 6.00% — 7965.54</p>
//           <p>Add : CGST @ 6.00% — 7965.54</p>
//           <p>Less : Rounded Off (-) 0.08</p>
//           <h4>Grand Total: ₹148690.00</h4>
//           <p>Rupees One Lakh Forty Eight Thousand Six Hundred Ninety Only</p>
//         </div>
//         <div className="tax-summary">
//           <h4>Tax Summary</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>Tax Rate</th>
//                 <th>Taxable</th>
//                 <th>CGST</th>
//                 <th>SGST</th>
//                 <th>Total Tax</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>12%</td>
//                 <td>132759.00</td>
//                 <td>7965.54</td>
//                 <td>7965.54</td>
//                 <td>15931.08</td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="bank-qr">
//             <div className="bank-details">
//               <h4>Bank Details</h4>
//               <p>
//                 Name: MAHAKALI ETHNIC COLLECTION <br />
//                 A/C: 1234567890123456 <br />
//                 IFSC: SBIN0012345 <br />
//                 Bank: State Bank of India <br />
//                 Branch: M.G. Road, Indore
//               </p>
//             </div>
//             <div className="qr">
//               <img
//                 src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=mahakali.ethnic@upi"
//                 alt="QR"
//               />
//               <p>Scan to pay via UPI</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Terms */}
//       <div className="terms">
//         <h4>Terms & Conditions:</h4>
//         <ol>
//           <li>E & O.E.</li>
//           <li>Goods once sold will not be taken back.</li>
//           <li>
//             Interest @ 18% p.a. will be charged if the payment is not made
//             within the stipulated time.
//           </li>
//           <li>
//             All disputes are subject to “Indore, Madhya Pradesh” Jurisdiction
//             only.
//           </li>
//           <li>
//             Returns accepted only within 7 days of delivery with packaging.
//           </li>
//         </ol>
//       </div>

//       {/* Signatures */}
//       <div className="signatures">
//         <div>
//           <p>Receiver’s Signature:</p>
//         </div>
//         <div className="auth-sign">
//           <p>For MAHAKALI ETHNIC COLLECTION</p>
//           <br />
//           <p>Authorised Signatory</p>
//         </div>
//       </div>

//       {/* Save + Print Buttons */}
//       <div style={{ marginTop: "20px", textAlign: "center" }}>
//         <button
//           onClick={() => {
//             localStorage.setItem("invoiceData", JSON.stringify(invoiceData));
//             alert("Invoice saved locally ✅");
//           }}
//           style={{
//             background: "#2a5783",
//             color: "white",
//             padding: "8px 16px",
//             marginRight: "10px",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Save
//         </button>

//         <button
//           onClick={() => window.print()}
//           style={{
//             background: "#0d6efd",
//             color: "white",
//             padding: "8px 16px",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Print
//         </button>
//       </div>
//     </div>
//   );
// }
