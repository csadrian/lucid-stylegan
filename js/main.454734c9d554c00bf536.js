(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{e6Wu:function(e,_,a){"use strict";a.r(_);a("SYky"),a("hZTp");var c=document.getElementById("animals"),n=document.getElementById("celeba"),l=document.getElementById("flowers"),r=document.getElementById("layersSelector"),t="animals",o="";function i(e){var _=e.target.id;c.classList.remove("active"),n.classList.remove("active"),l.classList.remove("active"),document.getElementById(_).classList.add("active"),t=_,d()}function u(e){r.innerHTML=x[e].layer.split("/")[1],o=x[e],d()}function d(){document.getElementById("lucidImages").innerHTML="";for(var e=0;e<o.size;e++){s("https://users.renyi.hu/~daniel/tmp/lucid/catalogs/"+t+"_"+o.layer+"/"+o.layer.split("/")[1]+"_"+e,e)}}function s(e,_){var a=new Image;a.src=e+"_googlenet_finetuned.pb.png";var c=new Image;c.src=e+"_googlenet_default.pb.png";var n=document.createElement("div");n.className="neuron mt-5 col-lg-4 col-md-6 col-sm-12";var l=document.createElement("div");l.className="face",l.appendChild(a),l.appendChild(c),n.appendChild(l);var r=document.createElement("h4");r.className="text-center",r.innerHTML="<b>"+_+"</b>",n.appendChild(r),document.getElementById("lucidImages").appendChild(n)}var x=[{layer:"neuron_catalog_1-20/Conv2d_1a_7x7_act-Relu",size:"64"},{layer:"neuron_catalog_1-20/Conv2d_2b_1x1_act-Relu",size:"64"},{layer:"neuron_catalog_1-20/Conv2d_2c_3x3_act-Relu",size:"192"},{layer:"neuron_catalog_1-20/Mixed_3b_Branch_1_a_1x1_act-Relu",size:"96"},{layer:"neuron_catalog_1-20/Mixed_3b_Branch_2_a_1x1_act-Relu",size:"16"},{layer:"neuron_catalog_1-20/Mixed_3b_Branch_0_a_1x1_act-Relu",size:"64"},{layer:"neuron_catalog_1-20/Mixed_3b_Branch_1_b_3x3_act-Relu",size:"128"},{layer:"neuron_catalog_1-20/Mixed_3b_Branch_2_b_3x3_act-Relu",size:"32"},{layer:"neuron_catalog_1-20/Mixed_3b_Branch_3_b_1x1_act-Relu",size:"32"},{layer:"neuron_catalog_1-20/Mixed_3c_Branch_1_a_1x1_act-Relu",size:"128"},{layer:"neuron_catalog_1-20/Mixed_3c_Branch_2_a_1x1_act-Relu",size:"32"},{layer:"neuron_catalog_1-20/Mixed_3c_Branch_0_a_1x1_act-Relu",size:"128"},{layer:"neuron_catalog_1-20/Mixed_3c_Branch_1_b_3x3_act-Relu",size:"192"},{layer:"neuron_catalog_1-20/Mixed_3c_Branch_2_b_3x3_act-Relu",size:"96"},{layer:"neuron_catalog_1-20/Mixed_3c_Branch_3_b_1x1_act-Relu",size:"64"},{layer:"neuron_catalog_1-20/Mixed_4b_Branch_1_a_1x1_act-Relu",size:"96"},{layer:"neuron_catalog_1-20/Mixed_4b_Branch_2_a_1x1_act-Relu",size:"16"},{layer:"neuron_catalog_1-20/Mixed_4b_Branch_0_a_1x1_act-Relu",size:"192"},{layer:"neuron_catalog_1-20/Mixed_4b_Branch_1_b_3x3_act-Relu",size:"208"},{layer:"neuron_catalog_1-20/Mixed_4b_Branch_2_b_3x3_act-Relu",size:"48"},{layer:"neuron_catalog_21-30/Mixed_4b_Branch_3_b_1x1_act-Relu",size:"64"},{layer:"neuron_catalog_21-30/Mixed_4c_Branch_1_a_1x1_act-Relu",size:"112"},{layer:"neuron_catalog_21-30/Mixed_4c_Branch_2_a_1x1_act-Relu",size:"24"},{layer:"neuron_catalog_21-30/Mixed_4c_Branch_0_a_1x1_act-Relu",size:"160"},{layer:"neuron_catalog_21-30/Mixed_4c_Branch_1_b_3x3_act-Relu",size:"224"},{layer:"neuron_catalog_21-30/Mixed_4c_Branch_2_b_3x3_act-Relu",size:"64"},{layer:"neuron_catalog_21-30/Mixed_4c_Branch_3_b_1x1_act-Relu",size:"64"},{layer:"neuron_catalog_21-30/Mixed_4d_Branch_1_a_1x1_act-Relu",size:"128"},{layer:"neuron_catalog_21-30/Mixed_4d_Branch_2_a_1x1_act-Relu",size:"24"},{layer:"neuron_catalog_21-30/Mixed_4d_Branch_0_a_1x1_act-Relu",size:"128"},{layer:"neuron_catalog_31-40/Mixed_4d_Branch_1_b_3x3_act-Relu",size:"256"},{layer:"neuron_catalog_31-40/Mixed_4d_Branch_2_b_3x3_act-Relu",size:"64"},{layer:"neuron_catalog_31-40/Mixed_4d_Branch_3_b_1x1_act-Relu",size:"64"},{layer:"neuron_catalog_31-40/Mixed_4e_Branch_1_a_1x1_act-Relu",size:"144"},{layer:"neuron_catalog_31-40/Mixed_4e_Branch_2_a_1x1_act-Relu",size:"32"},{layer:"neuron_catalog_31-40/Mixed_4e_Branch_0_a_1x1_act-Relu",size:"112"},{layer:"neuron_catalog_31-40/Mixed_4e_Branch_1_b_3x3_act-Relu",size:"288"},{layer:"neuron_catalog_31-40/Mixed_4e_Branch_2_b_3x3_act-Relu",size:"64"},{layer:"neuron_catalog_31-40/Mixed_4e_Branch_3_b_1x1_act-Relu",size:"64"},{layer:"neuron_catalog_31-40/Mixed_4f_Branch_1_a_1x1_act-Relu",size:"160"},{layer:"neuron_catalog_41-50/Mixed_4f_Branch_2_a_1x1_act-Relu",size:"32"},{layer:"neuron_catalog_41-50/Mixed_4f_Branch_0_a_1x1_act-Relu",size:"256"},{layer:"neuron_catalog_41-50/Mixed_4f_Branch_1_b_3x3_act-Relu",size:"320"},{layer:"neuron_catalog_41-50/Mixed_4f_Branch_2_b_3x3_act-Relu",size:"128"},{layer:"neuron_catalog_41-50/Mixed_4f_Branch_3_b_1x1_act-Relu",size:"128"},{layer:"neuron_catalog_41-50/Mixed_5b_Branch_1_a_1x1_act-Relu",size:"160"},{layer:"neuron_catalog_41-50/Mixed_5b_Branch_2_a_1x1_act-Relu",size:"32"},{layer:"neuron_catalog_41-50/Mixed_5b_Branch_0_a_1x1_act-Relu",size:"256"},{layer:"neuron_catalog_41-50/Mixed_5b_Branch_1_b_3x3_act-Relu",size:"320"},{layer:"neuron_catalog_41-50/Mixed_5b_Branch_2_b_3x3_act-Relu",size:"128"},{layer:"neuron_catalog_51-57/Mixed_5b_Branch_3_b_1x1_act-Relu",size:"128"},{layer:"neuron_catalog_51-57/Mixed_5c_Branch_1_a_1x1_act-Relu",size:"192"},{layer:"neuron_catalog_51-57/Mixed_5c_Branch_2_a_1x1_act-Relu",size:"48"},{layer:"neuron_catalog_51-57/Mixed_5c_Branch_0_a_1x1_act-Relu",size:"384"},{layer:"neuron_catalog_51-57/Mixed_5c_Branch_1_b_3x3_act-Relu",size:"384"},{layer:"neuron_catalog_51-57/Mixed_5c_Branch_2_b_3x3_act-Relu",size:"128"},{layer:"neuron_catalog_51-57/Mixed_5c_Branch_3_b_1x1_act-Relu",size:"128"}];document.getElementById("facesContent")?function(){for(var e=[],_=[],a=[],c=[],n=0;n<128;n++){a[n]=new Image,a[n].src="public/images/face/"+n+".jpg",c[n]=new Image,c[n].src="public/images/lucid/"+n+".jpg",e[n]=document.createElement("div"),e[n].className="neuron mt-5 col-lg-4 col-md-6 col-sm-12",e[n].id=n,_[n]=document.createElement("div"),_[n].className="face",_[n].appendChild(a[n]),_[n].appendChild(c[n]),_[n].value=n,e[n].appendChild(_[n]);var l=document.createElement("h4");l.className="text-center",l.innerHTML="<b>Neuron "+n+"</b>",e[n].appendChild(l),document.getElementById("content").appendChild(e[n]),_[n].onclick=function(a){for(var c=1*a.target.value,n=0;n<128;n++)e[n].classList.remove("active");e[c].classList.add("active");var l=document.createElement("video");l.src="public/videos/"+c+".mp4",l.className="video",l.autoplay=!0,_[c].appendChild(l)}}}():function(){c.onclick=i,n.onclick=i,l.onclick=i,console.log(r);var e=document.getElementById("layers");u(0),x.forEach(function(_,a){var c=document.createElement("a");c.className="dropdown-item",c.innerHTML=_.layer.split("/")[1],c.id=a,e.appendChild(c),e.onclick=function(e){u(e.target.id),console.log(e.target)}})}()},hZTp:function(e,_,a){}},[["e6Wu",1,2]]]);