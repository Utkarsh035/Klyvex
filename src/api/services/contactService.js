/**
 * Submit contact form data using Web3Forms.
 * @param {Object} formData - { name, email, phone, service, message }
 * @returns {Promise} API response
 */
export const submitContactForm = async (formData) => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: "4500af88-fd99-468e-a028-7f5ced8d92a6",
      ...formData
    }),
  });
  
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to submit form");
  }
  return data;
};
