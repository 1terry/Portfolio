// "use strict";
// var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
//     var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
//     if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
//     else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
//     return c > 3 && r && Object.defineProperty(target, key, r), r;
// };
// exports.__esModule = true;
// exports.initFunction = exports.HomeComponent = void 0;
// var core_1 = require("@angular/core");
// var HomeComponent = /** @class */ (function () {
//     function HomeComponent() {
//         this.content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae \n  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, \n  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam \n  quisquam, quae, temporibus dolores porro doloribus.";
//         // constructor(@inject(DOCUMENT) private document: Document) { }
//         this.active = 1;
//         this.imagesForSlider = [
//             { path: '/assets/CO2.png' },
//             { path: '/assets/COVID-Visualizer.png' },
//             { path: '/assets/EcoBoost.png' },
//             { path: '/assets/COVID-Visualizer.png' },
//             { path: '/assets/EcoBoost.png' },
//         ];
//         this.title = 'frontEnd';
//         // for more details on config options please visit fullPage.js docs
//         this.config = {
//             // fullpage options
//             licenseKey: 'YOUR LICENSE KEY HERE',
//             anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
//             menu: '#menu',
//             navigation: true,
//             // fullpage callbacks
//             afterResize: function () {
//                 console.log("After resize");
//             },
//             afterLoad: function (origin, destination, direction) {
//                 console.log(origin.index);
//             }
//         };
//     }
//     HomeComponent.prototype.ngOnInit = function () {
//     };
//     HomeComponent.prototype.toGithub = function () {
//         window.open("https://github.com/1terry", "_blank");
//     };
//     HomeComponent.prototype.toDevpost = function () {
//         window.open("https://devpost.com/1terry?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav", "_blank");
//     };
//     HomeComponent.prototype.toLinkedIn = function () {
//         window.open("https://www.linkedin.com/in/terry-ju", "_blank");
//     };
//     HomeComponent.prototype.toProj1 = function () {
//         window.open("https://www.figma.com/file/NOGYTw7FKEc3HkpVhoA0mW/Prototype-Design-Sprint");
//     };
//     HomeComponent.prototype.toProj2 = function () {
//         window.open("https://vast-wave-55816.herokuapp.com/");
//     };
//     HomeComponent.prototype.toProj3 = function () {
//         window.open("https://htn2021covid.herokuapp.com/");
//     };
//     HomeComponent.prototype.handleCarouselEvents = function (event) {
//         console.log(event);
//     };
//     HomeComponent.prototype.getRef = function (fullPageRef) {
//         this.fullpage_api = fullPageRef;
//     };
//     HomeComponent = __decorate([
//         core_1.Component({
//             selector: 'app-home',
//             templateUrl: './home.component.html',
//             styleUrls: ['./home.component.scss']
//         })
//     ], HomeComponent);
//     return HomeComponent;
// }());
// exports.HomeComponent = HomeComponent;
// // var changeColour = document.getElementById("background-change");
// // function handleClick(this: HTMLElement) {
// //     console.log("Clicked!");
// //     const randomColor = Math.floor(Math.random()*16777215).toString(16);
// //     changeColour.innerHTML =  "#" + randomColor;
// //     this.removeEventListener("click", handleClick);
// // }
// // changeColour?.addEventListener("click", handleClick, false);
// function initFunction() {
//     var element = document.getElementById("background-change");
//     element === null || element === void 0 ? void 0 : element.addEventListener("click", listenerFunction);
// }
// exports.initFunction = initFunction;
// function listenerFunction(ev) {
//     ev.preventDefault();
//     console.log("clicked");
//     this.style.color = "red";
// }
