import './albumart.css'
function Albumartview(props) {
  return (
	<div className="albumartviewwrapper">
		<img src="cover.jpg" className="albumart256"/>
		<p> {props.albumname} </p>
	</div>
  );
}

export default Albumartview;