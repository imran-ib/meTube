export const ErrorMessage = err => {
  const Message = err.split(":");
  return "Something Went Wrong: " + Message[1] || "Something Went Wrong";
};
export const SuccessMessage = message => {
  const Message = message.split(":");
  return "Success: " + Message[1] || "Something Went Wrong";
};
