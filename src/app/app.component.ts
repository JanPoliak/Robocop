import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { NgModule } from '@angular/core';

declare var jquery:any;
declare var $ :any;
declare var require: any;

@NgModule({
	imports: [
		HttpModule
	]
})


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  @ViewChild('initBlock') initBlock: ElementRef;
  @ViewChild('splashScreen') splashScreen: ElementRef;
  @ViewChild('textArea') textArea: ElementRef;
  @ViewChild('responseArea') responseArea: ElementRef;
  @ViewChild('loader') loader: ElementRef;
  @ViewChild('responseAreaText') responseAreaText: ElementRef;

  constructor(private http: Http) { }

  title = 'Robocop';
  initMsg = "";
  query = "";
  response = "";
  responseData;

  composeResponse(responseData) {

  	$('.responseAreaText').css('fontSize', 60);
  	var responses = require('./responses.json');
  	var page = require('./pages/ZeepinPage.html');

  	console.log(responseData.length);
  	if (responseData.intent == null) {
  		var responseList = responses['undefined'];
  		var response = responseList[Math.floor(Math.random() * responseList.length)];	
  		return response;
	}
  	
  	var confidence = responseData.intent[0].confidence;
  	var value = responseData.intent[0].value;

  	switch (value) {
  		case "zeepin_description":
  			var page = require('./pages/ZeepinPage.html');
  			return page;
  		
  		case "trinity_description":
  			var page = require('./pages/TrinityPage.html');
  			return page;

case "jan_description":
        var page = require('./pages/JanPage.html');
        return page;

case "marek_description":
        var page = require('./pages/MarekPage.html');
        return page;

  		default:
			var responseList = responses[value];
		  	var response = responseList[Math.floor(Math.random() * responseList.length)];	
  			return response;
  	}
  }

  resize_to_fit() {
  var fontsize = $('.responseAreaText').css('font-size');
  $('.responseAreaText').css('fontSize', parseFloat(fontsize) - 1);

  if ($('.responseAreaText').height() >= $('.responseArea').height()) {
    this.resize_to_fit();
  	}
  }

  doPOST() {
  		console.log("POST");
  		let url = 'https://api.wit.ai/message';
  		var question = this.textArea.nativeElement.value;
  		var token = "FOVTCJETRQ56FYSBD6ZHDRN25AJCMPNN"

  		if (question === "") return;
  		$('.loader').show();

  		this.http.get(url, {
      params: {
        q: question,
        access_token: token
      }}).subscribe(res => { console.log(res.json().entities);
      						 this.responseData = res.json().entities;
      						 this.responseAreaText.nativeElement.innerHTML = this.composeResponse(this.responseData);
      						 $('.loader').hide();
      						 this.resize_to_fit();
      						});
  }

  ngOnInit() {

  	this.initialize();

  }

  onKeydown(event) {
  	if (event.key === "Enter") {
  		event.preventDefault();
  		this.doPOST();
  	}
  }

 initialize() {
    this.initMsg = "Initializing core modules";

    setTimeout(() => 
  {
      this.initMsg = "Waking Up";
  },
  2000);

	setTimeout(() => 
	{
    	this.initMsg = "Meet the Boss";
    	this.initBlock.nativeElement.classList.add('loading');
    	this.initBlock.nativeElement.classList.remove('loading-pulsate');
    	this.initBlock.nativeElement.style["font-size"] = "60px";

	},
	4000);  	

	setTimeout(() => 
	{
    	this.initMsg = "";
    	this.splashScreen.nativeElement.style.display = "none";
    	this.textArea.nativeElement.focus();
    	this.response = "Hey hou";

	},
	6000);

  }

}
