let data = new URLSearchParams(location.search).get('data');
document.getElementById("barcode").innerHTML = 
	`<div style='flex:1; display: flex; justify-content:center; align-items:center;'>
	  <!-- insert your custom barcode setting your data in the GET parameter "data" -->
	  <img alt='Barcode Generator TEC-IT'
		   src='https://barcode.tec-it.com/barcode.ashx?data=` + data + `&code=Code128&translate-esc=true'/>
	</div>
	<div style='padding-top:8px; text-align:center; font-size:15px; font-family: Source Sans Pro, Arial, sans-serif;'>
	  <!-- back-linking to www.tec-it.com is required -->
	  <a href='https://www.tec-it.com' title='Barcode Software by TEC-IT' target='_blank'>
		TEC-IT Barcode Generator<br/>
		<!-- logos are optional -->
		<img alt='TEC-IT Barcode Software' border='0'
			 src='http://www.tec-it.com/pics/banner/web/TEC-IT_Logo_75x75.gif'>
	  </a>
	</div>`;