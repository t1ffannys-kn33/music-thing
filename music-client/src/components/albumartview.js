import './albumart.css'
function Albumartview(props) {
  return (
	<div className="albumartviewwrapper">
		<img src="cover.jpg" className="albumart256"/>
		<span>
			<p className="albumartviewtext"> {props.albumname} </p> 
			<button/>
		</span>
	</div>
  );
}

export default Albumartview;