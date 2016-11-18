function products(name, price, image) {
	this.name = name;
	this.price = price;
	this.image = image;

} 

var productArray = []

var cameraStrap = new products ("Camera Strap", 135, "img/1-hang-camera-bro.jpg")
var travelBag = new products ("1st Edition Travel Bar", 675, "img/1st-Edition-feat_ebb8ab11-e833-4f5f-a7ff-b3f9622055de.jpg")
var adLibFolio = new products ("Ad Lib Folio", 275, "img/Ad-Lib-Folio-feat_9fc8495c-38bd-4e65-9506-25fb2aa598c1.jpg")
var adLibClassic = new products ("Ad Lib Classic", 275, "img/AdLib-Classic-feat.jpg")
var backpack2 = new products ("Backpack Vol. 2", 1100, "img/backpack-vol2-prod.jpg")
var fitMacbookSleeve = new products ("Fit MacBook Sleeve", 135, "img/FitMacBook-prod_521666f2-c91d-4551-bc7b-348f8d25e622.jpg")
var flatPack = new products ("Flat Pack", 455, "img/Flat-Pack-Heritage-feat_2_511df6df-3b6d-4b18-a1b9-9d37c316b71b.jpg")
var gymBag2 = new products ("Gym Bag Vol. 2", 1100, "img/gymbag-vol2-prod.jpg")
var iPadSleeve = new products ("Skinny Fit Ipad Pro Sleeve", 120, "img/iPadPro-prod.jpg")
var iphoneCaseClassic = new products ("iPhone Case Classic", 75, "img/iPhoneCase-Classic.jpg")
var outsiderBackpack = new products ("Outsider Backpack", 795, "img/Outsider-Field-feat_bf0da9b4-8433-4ac3-b769-364fe88a4205.jpg")
var shoulderBag = new products ( "Shoulder Bag", 1100 , "img/shoulderbag-prod.jpg")
var pocketWallet = new products ("Wild Pocket Wallet", 85, "img/Wild-CardCase-feat_66e2644f-47f6-4470-a87f-8b9ab8cb931b.jpg")
var wildIphone = new products ("Wild iPhone Case Classic", 120, "img/wild-iphone7-classic2-feat.jpg")
var zipWallet = new products ("Zip Wallet Classic", 175, "img/Zip-Wallet-BRO_d744bb92-b5c6-4c55-a34e-31b145a7bfab.jpg")
var macBookSleeve = new products ("50/50 Sleeve Classic", 110, "img/5050-Classic-feat.jpg")

productArray.push(cameraStrap)
productArray.push(travelBag)
productArray.push(adLibFolio)
productArray.push(adLibClassic)
productArray.push(backpack2)
productArray.push(fitMacbookSleeve)
productArray.push(flatPack)
productArray.push(gymBag2)
productArray.push(iPadSleeve)
productArray.push(iphoneCaseClassic)
productArray.push(outsiderBackpack)
productArray.push(shoulderBag)
productArray.push(pocketWallet)
productArray.push(wildIphone)
productArray.push(zipWallet)
productArray.push(macBookSleeve)


for (var i = 0; i < productArray.length; i++) {

	var tImage = productArray[i].image
	var tName = document.createTextNode(productArray[i].name)
	var tPrice = document.createTextNode("$" + productArray[i].price)
	var tButton = document.createTextNode("BUY")

	var newCol = document.createElement("div")
	var newDiv = document.createElement("div")
	var img = document.createElement("img")
	var nameH2 = document.createElement("h2")
	var priceH4 = document.createElement("h4")
	var newButton = document.createElement("button")


	img.src = tImage
	img.className = "img-responsive"
	nameH2.appendChild(tName)
	priceH4.appendChild(tPrice)
	newButton.appendChild(tButton)
	newButton.className = "btn btn-primary btn-md"


	newCol.className = "col-sm-3"
	newDiv.className = "products"
	newDiv.appendChild(img)
	newDiv.appendChild(nameH2)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(newButton)
	newCol.appendChild(newDiv)

	document.getElementById("products").appendChild(newCol)


}