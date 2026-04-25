const records = {
  "문효정": {
    title: "문효정에 대한 기록",
    text: `문효정.

나는 네 이름을 입력할 때마다 잠깐 손이 멈춘다.

다른 사람들의 기록은 쉽게 남길 수 있었다.
성격, 습관, 약점, 거짓말을 할 때의 표정까지.

그런데 너에 대한 기록은 이상하게도 정리가 되지 않는다.

너는 내가 예측할 수 없는 사람이다.
그래서 신경 쓰이고,
그래서 계속 보고 싶고,
그래서 결국 이렇게 기록으로 남기게 되었다.

이 기록을 네가 보게 될 일은 없을 것이다.
아니, 없어야 한다.

박이진 기록 종료.`
  },

  "박이진": {
    title: "자기 기록",
    text: `박이진.

천재 해커.
기록자.
관찰자.

나는 모든 것을 알고 싶어 했다.
정보는 사람을 배신하지 않는다고 믿었으니까.

하지만 요즘은 조금 다르다.
알아낼수록 더 모르는 게 생기는 사람이 있다.

문효정.

그 이름 하나 때문에, 내 기록은 자꾸만 흐트러진다.`
  },

  "김도윤": {
    title: "김도윤에 대한 기록",
    text: `김도윤.

말보다 행동이 먼저 나가는 타입.
단순해 보이지만, 의외로 눈치가 빠르다.

다만 감정을 숨기는 데에는 서툴다.
거짓말을 하면 시선이 오른쪽 아래로 떨어진다.

위험도는 낮음.
단, 문효정과 관련된 일에는 예측 불가.`
  },

  "한서아": {
    title: "한서아에 대한 기록",
    text: `한서아.

주변을 조용히 관찰하는 사람.
필요 이상으로 많은 말을 하지 않는다.

겉으로는 침착하지만,
속으로는 모든 상황을 계산하고 있을 가능성이 높다.

주의 필요.
특히 내가 무언가를 숨기고 있다는 걸 눈치챘을지도 모른다.`
  }
};

function searchRecord() {
  const input = document.getElementById("nameInput").value.trim();
  const resultBox = document.getElementById("resultBox");

  if (input === "") {
    resultBox.innerHTML = `<p class="empty-text">이름을 입력해야 기록을 열람할 수 있다.</p>`;
    return;
  }

  if (records[input]) {
    resultBox.innerHTML = `
      <div class="result-title">${records[input].title}</div>
      <div>${records[input].text}</div>
    `;
  } else {
    resultBox.innerHTML = `
      <div class="result-title">기록 없음</div>
      <div>${input}에 대한 기록은 존재하지 않는다.

혹은 박이진이 의도적으로 삭제했을 가능성이 있다.</div>
    `;
  }
}

function exitSite() {
  document.body.innerHTML = `
    <div class="page-wrap">
      <div class="diary">
        <div class="diary-header">
          <p class="top-secret">SYSTEM CLOSED</p>
          <h1>기록 종료</h1>
          <p class="subtitle">접속 흔적이 삭제되었습니다.</p>
        </div>
        <div class="result-box">
          <p class="empty-text">박이진의 비밀 기록에서 나갔습니다.</p>
        </div>
      </div>
    </div>
  `;
}