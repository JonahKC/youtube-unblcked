//https://www.youtube.com/watch?v=dQw4w9WgXcQ
//https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?wmode=transparent&amp;iv_load_policy=3&amp;autoplay=1&amp;html5=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=0&amp;theme=light
const base = "https://www.youtube-nocookie.com/embed/";
const end = "?wmode=transparent&amp;iv_load_policy=3&amp;autoplay=0&amp;html5=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=0&amp;theme=light";
const strip_chars = /[^0-9a-zA-z]/
var submit = document.getElementById('submit');
var url = document.getElementById('url');
var video_holder;
var video_holder_holder = document.getElementById('video-holder-holder');
var link;
var id;
submit.onclick = () => {
	if(document.getElementById('instructions')) {
		document.getElementById('instructions').remove();
	}
	link = url.value;
	id = link.replace(strip_chars, "");
	id = id.substr(link.replace(strip_chars, "").length - 11, 11);
	video_holder = document.getElementById('video-holder').cloneNode(true);
	video_holder.style.display = 'block';
	video_holder.children[1].src = base + id + end;
	video_holder_holder.appendChild(video_holder);
}