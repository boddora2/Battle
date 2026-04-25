const records = {
  "문효정": {
    title: "문효정에 대한 일기",
    text: `문효정.

솔직히 말하면, 나는 네가 신경 쓰인다.

처음에는 그냥 궁금했다.
다른 애들이랑 조금 다르다고 생각했으니까.

그런데 이상하게 자꾸 눈이 갔다.
네가 웃는 것도,
말하는 것도,
누군가를 바라보는 것도.

나는 원래 사람을 잘 믿지 않는다.
사람은 쉽게 거짓말을 하고,
쉽게 숨기고,
쉽게 변하니까.

그런데 너는...
내가 모르는 걸 자꾸 만들었다.

그래서 싫다.
아니, 싫은 건 아닌데.
아무튼 이상하다.

이건 절대 들키면 안 된다.
특히 문효정, 너한테는 더더욱.`
  },

  "박이진": {
    title: "박이진에 대한 일기",
    text: `박이진.

천재 해커.
관찰자.
기록자.

나는 다른 애들보다 많은 걸 안다.
누가 누구를 좋아하는지,
누가 무슨 거짓말을 하는지,
누가 어떤 비밀을 숨기고 있는지.

그런데 요즘은 내가 제일 이상하다.

문효정 때문이다.

분명 처음에는 그냥 관찰이었다.
그런데 이제는...
관찰이라고 하기엔 너무 자주 보고 있다.`
  }
};

function searchRecord() {
  const input = document.getElementById("nameInput").value.trim();
  const resultBox = document.getElementById("resultBox");

  if (input === "") {
    resultBox.innerHTML = `
      <p class="empty-text">
        이름을 입력해야 일기를 볼 수 있어.<br>
        아무한테나 보여주는 거 아니거든?
      </p>
    `;
    return;
  }

  if (records[input]) {
    resultBox.innerHTML = `
      <div class="result-title">${records[input].title}</div>
      <div>${records[input].text}</div>
    `;
  } else {
    resultBox.innerHTML = `
      <div class="result-title">관심 없음</div>
      <div>
        ${input}에 대한 일기는 없어.<br>
        적어둘 만큼 관심 있는 애는 아니야.
      </div>
    `;
  }
}

function exitSite() {
  document.body.innerHTML = `
    <div class="page-wrap">
      <div class="diary">
        <div class="diary-header">
          <p class="top-secret">DIARY CLOSED</p>
          <h1>일기장 덮음</h1>
          <p class="subtitle">이제 더는 못 봐.</p>
        </div>

        <div class="result-box">
          <p class="empty-text">
            박이진의 일기장을 덮었습니다.<br>
            접속 기록은... 아마 지웠을걸?
          </p>
        </div>
      </div>
    </div>
  `;
}