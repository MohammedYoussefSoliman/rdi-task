const handleFormDate = (formData: { [key: string]: string }) => {
  const payload = new FormData();
  const formDataKeys = Object.keys(formData);
  const formDataValues = Object.values(formData);

  for (let i = 0; i <= formDataKeys.length; i++) {
    payload.append(formDataKeys[i], formDataValues[i]);
  }

  return payload;
};

export default handleFormDate;
