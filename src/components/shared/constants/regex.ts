export const RegexPatterns = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    contactNumber: /^\d{10}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    fileType: /\.(xlsx|xls|csv|pdf)$/i
}