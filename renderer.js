var task_list = document.getElementById('task-list');
var add_task_btn = document.getElementById('add-task-btn');
var add_task_content = document.getElementById('add-task-content');
var dark_mode_btn = document.getElementById('top-dark-mode');
var body = document.getElementsByTagName('body')[0];

function task_prototype(task_content) {
	var task = document.createElement('LI');
	var dot = document.createElement('BUTTON');
	var content = document.createElement('DIV');
	var delete_btn = document.createElement('BUTTON');
	dot.classList = "dot";
	dot.addEventListener('click',()=>{
		if(dot.classList.length === 1){
			dot.classList = "dot checked";
			content.style['textDecoration'] = "line-through";
		} else {
			dot.classList = "dot";
			content.style['textDecoration'] = "none";
		}
	});
	content.classList = "task-content";
	content.innerText = task_content;
	delete_btn.classList = "delete-btn";
	delete_btn.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z\"/></svg>";
	delete_btn.addEventListener('click',()=>{
		delete_btn.parentElement.remove();
	});
	task.classList = "task";
	task.appendChild(dot);
	task.appendChild(content);
	task.appendChild(delete_btn);
	return task;
}

add_task_btn.addEventListener('click',()=>{
	task_list.appendChild(task_prototype(add_task_content.nodeValue));
	add_task_content.nodeValue = "";
});

add_task_content.addEventListener('keydown',(e)=>{
	if(e.key === "Enter"){
		task_list.appendChild(task_prototype(add_task_content.value));
		add_task_content.value = "";
	}
});

dark_mode_btn.addEventListener('click',()=>{
	body.classList = body.className === "" ? "dark-mode" : "";
});