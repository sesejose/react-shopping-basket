export async function insertOrder(payload) {
  // const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeHF5ZGpucGpmaXZ5bmJrY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4MTYsImV4cCI6MTk4MjE3NDgxNn0.ZpCqZ-NGVr--Shy5gIhAsap8x7bM9hIetyWffTdJYpE";

  const url = "https://vixqydjnpjfivynbkcev.supabase.co";
  const res = await fetch(url + "/rest/v1/react_shopping_basket", {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeHF5ZGpucGpmaXZ5bmJrY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4MTYsImV4cCI6MTk4MjE3NDgxNn0.ZpCqZ-NGVr--Shy5gIhAsap8x7bM9hIetyWffTdJYpE",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeHF5ZGpucGpmaXZ5bmJrY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4MTYsImV4cCI6MTk4MjE3NDgxNn0.ZpCqZ-NGVr--Shy5gIhAsap8x7bM9hIetyWffTdJYpE",
      Prefer: "return=representation",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await res.json();
}

//Here we fetch and return data from and to the data base, it is sent by the form to the Supabase table.

//*************************************** */

// The (payload) parameter of the function here ---> Is the object in the callback function in CheckOutForm.jsx
// The body here stringify that object (converts the objects into a strings).

//*********************************** */

// 10. We ask the function to return something (that object), that is the array in the Basket (Name, Mail, Address and Carts in the Basket).
// 11. We make the function async and create a const "res" with await for the fetch and POST.

//*********************************** */

// 12. In CheckoutForm the submit function is the ASYNC; and insertOrder() function on it has a const "response" with an object as value. As we said before, that value / object is passed as parameter by the callback function to the function that send/POST/return the body/data to be posted in the table.
