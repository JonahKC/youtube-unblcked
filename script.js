//https://www.youtube.com/watch?v=dQw4w9WgXcQ
//https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?wmode=transparent&amp;iv_load_policy=3&amp;autoplay=1&amp;html5=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=0&amp;theme=light
const base = "https://www.youtube-nocookie.com/embed/";
const end = "?wmode=transparent&amp;iv_load_policy=3&amp;autoplay=0&amp;html5=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=0&amp;theme=light";
var submit = document.getElementById('submit');
var url = document.getElementById('url');
var iframe;
var link;
var id;
submit.onclick = () => {
	link = url.value;
	id = link.substr(32, 11)
	iframe = document.getElementById('video').cloneNode(true);
	iframe.style.display = 'block';
	document.getElementById('video-holder').appendChild(iframe);
	iframe.src = base + id + end;
}