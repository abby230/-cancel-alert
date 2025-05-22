// ─ Firebase 초기화 (본인 Firebase 콘솔에서 config 복사 후 붙여넣기) ─
const firebaseConfig = {
  apiKey: "AIzaSyBHINQYOr9tfgSbrDVKK5Dfm6XlEvhHXk0",
  authDomain: "cancel-alert-app.firebaseapp.com",
  projectId: "cancel-alert-app",
  storageBucket: "cancel-alert-app.firebasestorage.app",
  messagingSenderId: "1025624107398",
  appId: "1:1025624107398:web:843d9e86118be7b8916407"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ─ 로그인 버튼 이벤트 ─
document.getElementById('loginBtn').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const pw    = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, pw)
    .then(() => {
      document.getElementById('authSection').style.display   = 'none';
      document.getElementById('searchSection').style.display = 'block';
    })
    .catch(err => alert("로그인 오류: " + err.message));
});

// ─ 회원가입 버튼 이벤트 ─
document.getElementById('signupBtn').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const pw    = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, pw)
    .then(() => alert("회원가입 완료! 로그인해 주세요."))
    .catch(err => alert("회원가입 오류: " + err.message));
});

// ─ 기존 검색 기능 ─
document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const location = document.getElementById('location').value;
  const checkin  = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;

  // 날짜 유효성 검사
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