console.log("스크립트 연결 완료!");

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const location = document.getElementById('location').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;

  if (new Date(checkin) >= new Date(checkout)) {
    alert("체크아웃 날짜는 체크인 날짜보다 나중이어야 합니다.");
    return;
  }

  document.getElementById('result').innerHTML = `
    <p><strong>검색 결과:</strong></p>
    <p>지역/숙소명: ${location}</p>
    <p>체크인: ${checkin}</p>
    <p>체크아웃: ${checkout}</p>
  `;
});
