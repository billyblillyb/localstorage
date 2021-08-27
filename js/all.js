// 指定DOM
let inputButton = document.querySelector('.send');
let ulArea = document.querySelector('.list');
let taskList = JSON.parse(localStorage.getItem('storagedTask')) || [];

// 加入及刪除內容事件
inputButton.addEventListener('click', inputTask, false);
ulArea.addEventListener('click', deleteTask, false);

// 打開頁面時載入內容
showTask();

// 增加及更新儲存工內容的陣列，並同步更新localstorage的內容
function inputTask(e) {
  e.preventDefault();
  taskList.push(document.querySelector('.text').value);
  localStorage.setItem('storagedTask', JSON.stringify(taskList));
  showTask();
}

// 從陣列中刪除點擊的工作內容及更新陣列，並同步更新localstorage的內容
function deleteTask(e) {
  if (e.target.nodeName == "I") {
    var deleteTask = e.target.dataset.num;
    taskList.splice(deleteTask, 1);
    localStorage.setItem('storagedTask', JSON.stringify(taskList));
    showTask();
  }
}

// 把當前的陣列內容，顯示於指定的ul元素
function showTask() {
  let len = taskList.length;
  var str = "";
  for (let i = 0; i < len; i++) {
      str +=  '<li><i class="fas fa-minus-circle awsomeIcon" data-num="'+ i +'"></i></a>\xa0\xa0' + taskList[i] + '</li>';
      }
  ulArea.innerHTML = str;
}
