// Hàm tùy chỉnh để gửi yêu cầu fetch với token (nếu có)
async function fetchApi(url, options = {}) {
  // Kiểm tra xem accessToken đã có trong local storage hay không
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    // Nếu accessToken có sẵn, gắn token vào header "Authorization"
    if (!options.headers) {
      options.headers = {};
    }
    options.headers.Authorization = `Bearer ${accessToken}`;
  }

  // Gửi yêu cầu fetch với các tùy chọn đã cập nhật
  const response = await fetch(url, options);

  return response;
}
export default fetchApi;
