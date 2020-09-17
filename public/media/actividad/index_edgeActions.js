/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4295, function(sym, e) {
         // introducir código aquí
         Posicion=0;
         sym.$(Textos1[0]).show("slide", { direction: "right" }, 1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         Textos1=(["p1_parrafo_1","p1_parrafo_2","p1_parrafo_3","p1_parrafo_4","p1_parrafo_5","p1_parrafo_6","p1_parrafo_7"]);
         
         
         Textos1=  Textos1.sort(function() {return Math.random() - 0.5});
         Posicion=0;
         Correctas=0;
         Correctas2=0;
         Siguiente="";
         seleccionadas=[];
         contador=0;
         contador2=0;
         Incorrectas2=0;
         Arrastradas=[];
         claseCajas=[];
         sym.$(".fichas").draggable({revert:'invalid'});
         sym.$(".equis").draggable({revert:'invalid'});
         sym.$(".porcentajes").draggable({revert:'invalid'});
         sym.$(".numeros").draggable({revert:'invalid'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4700, function(sym, e) {
         // introducir código aquí
         Siguiente="preg2";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_instrucciones}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Mostrar un elemento 
         sym.$("intro1").show();
         
         sym.getSymbol("intro1").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4174, function(sym, e) {
         
         
         sym.$(".caja").droppable({
           accept: sym.$(".fichas"),
           drop: handleDropEvent,
         
         });
         
         
         
         
         function handleDropEvent(event, ui){		
             ui.draggable.draggable( 'disable' );
             $(this).droppable( 'disable' );
             // place draggable where needed. could be left, top
            //ui.draggable.position( { of: $(this), my: 'left', at: 'top' } );
             //ui.draggable.position( { of: $(this), my: 'center'+'top', at: 'center'+'top' } );
             ui.draggable.position( { of: $(this), my: 'center'+'top',  at: 'center'+'right'} );
             ui.draggable.draggable( 'option', 'revert', false );
         
             var elem_dropable =$(this).attr("id");
             contador++;
         
           switch(Textos1[Posicion]) {
         
             case 'p1_parrafo_1':
                 var elem= $(ui.draggable).attr("id");
         
         		  Arrastradas[Posicion]=elem.substring(6, 23);
         			
         			//pregunta="pre2";
                 if (elem=='Stage_p1_carta_fisica'){
         				seleccionadas[Posicion]="si";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');	
         				sym.$('p1_'+pro+'v').show();
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				seleccionadas[Posicion]="no";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');	
         				sym.$('p1_'+pro+'v').show();
         				sym.$("fail")[0].play();								 
         		  }
             break;
                 case 'p1_parrafo_2':
                 var elem= $(ui.draggable).attr("id");
                  Arrastradas[Posicion]=elem.substring(6, 23);
         		
         		 // seleccionadas[Posicion]=elem.substring(6, 17);
         			//pregunta="pre2";
                 if (elem=='Stage_p1_carta_auditiva'){
         				seleccionadas[Posicion]="si";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');	
         				sym.$('p1_'+pro+'v').show();
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				seleccionadas[Posicion]="no";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');	
         				sym.$('p1_'+pro+'v').show();
         				sym.$("fail")[0].play();								 
         		  }
             break;
                 case 'p1_parrafo_3':
                 var elem= $(ui.draggable).attr("id");
                 Arrastradas[Posicion]=elem.substring(6, 23);
         		
         		  //seleccionadas[Posicion]=elem.substring(6, 17);
         			//pregunta="pre2";
                 if (elem=='Stage_p1_carta_visual'){
         				seleccionadas[Posicion]="si";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');	
         				sym.$('p1_'+pro+'v').show();
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				seleccionadas[Posicion]="no";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');	
         				sym.$('p1_'+pro+'v').show();
         				sym.$("fail")[0].play();								 
         		  }
             break;
                 case 'p1_parrafo_4':
                 var elem= $(ui.draggable).attr("id");
                 Arrastradas[Posicion]=elem.substring(6, 23);
         		
         		  //seleccionadas[Posicion]=elem.substring(6, 17);
         			//pregunta="pre2";
                 if (elem=='Stage_p1_carta_psico'){
         				seleccionadas[Posicion]="si";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');	
         				sym.$('p1_'+pro+'v').show();
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				seleccionadas[Posicion]="no";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');	
         				sym.$('p1_'+pro+'v').show();
         				sym.$("fail")[0].play();								 
         		  }
             break;
                 case 'p1_parrafo_5':
                 var elem= $(ui.draggable).attr("id");
                 Arrastradas[Posicion]=elem.substring(6, 23);
         		
         		  //seleccionadas[Posicion]=elem.substring(6, 17);
         			//pregunta="pre2";
         
                 if (elem=='Stage_p1_carta_intelec'){
         				seleccionadas[Posicion]="si";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');	
         				sym.$('p1_'+pro+'v').show();
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				seleccionadas[Posicion]="no";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');	
         				sym.$('p1_'+pro+'v').show();
         				sym.$("fail")[0].play();								 
         		  }
             break;
               case 'p1_parrafo_6':
                 var elem= $(ui.draggable).attr("id");
                 Arrastradas[Posicion]=elem.substring(6, 23);
         		
         		  //seleccionadas[Posicion]=elem.substring(6, 17);
         			//pregunta="pre2";
         
                 if (elem=='Stage_p1_carta_sordo'){
         				seleccionadas[Posicion]="si";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');	
         				sym.$('p1_'+pro+'v').show();
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				seleccionadas[Posicion]="no";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');	
         				sym.$('p1_'+pro+'v').show();
         				sym.$("fail")[0].play();								 
         		  }
             break;
               case 'p1_parrafo_7':
                 var elem= $(ui.draggable).attr("id");
                 Arrastradas[Posicion]=elem.substring(6, 23);
         		
         		  //seleccionadas[Posicion]=elem.substring(6, 17);
         			//pregunta="pre2";
         
                 if (elem=='Stage_p1_carta_multiple'){
         				seleccionadas[Posicion]="si";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');	
         				sym.$('p1_'+pro+'v').show();
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				seleccionadas[Posicion]="no";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');	
         				sym.$('p1_'+pro+'v').show();
         				sym.$("fail")[0].play();								 
         		  }
             break;
         
         }
         
         // Mostrar un elemento 
         //sym.$("boton_siguiente").show();
         sym.play(Siguiente);
         //if (contador==5){
         	//sym.play('final');
         //}
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // introducir código aquí
         for (var i=0; i<6; i++) {
         var pro=i+1;
         sym.$(Arrastradas[i]).hide();
         //alert(seleccionadas[i]);
         if (seleccionadas[i]=="si"){
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');					  
         	}else{
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');			  
         	}
         }
         sym.$(".caja").droppable('enable');
         
         Posicion=1;
         sym.$(Textos1[1]).show("slide", { direction: "right" }, 1000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5450, function(sym, e) {
         // introducir código aquí
         Siguiente="preg3";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // introducir código aquí
         for (var i=0; i<6; i++) {
         var pro=i+1;
         sym.$(Arrastradas[i]).hide();
         //alert(seleccionadas[i]);
         if (seleccionadas[i]=="si"){
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');					  
         	}else{
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');			  
         	}
         }
         sym.$(".caja").droppable('enable');
         
         Posicion=2;
         sym.$(Textos1[2]).show("slide", { direction: "right" }, 1000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5950, function(sym, e) {
         // introducir código aquí
         Siguiente="preg4";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // introducir código aquí
         for (var i=0; i<6; i++) {
         var pro=i+1;
         sym.$(Arrastradas[i]).hide();
         //alert(seleccionadas[i]);
         if (seleccionadas[i]=="si"){
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');					  
         	}else{
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');			  
         	}
         }
         sym.$(".caja").droppable('enable');
         
         Posicion=3;
         sym.$(Textos1[3]).show("slide", { direction: "right" }, 1000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6450, function(sym, e) {
         // introducir código aquí
         Siguiente="preg5";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // introducir código aquí
         for (var i=0; i<6; i++) {
         var pro=i+1;
         sym.$(Arrastradas[i]).hide();
         //alert(seleccionadas[i]);
         if (seleccionadas[i]=="si"){
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');					  
         	}else{
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');			  
         	}
         }
         sym.$(".caja").droppable('enable');
         
         Posicion=4;
         sym.$(Textos1[4]).show("slide", { direction: "right" }, 1000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6950, function(sym, e) {
         // introducir código aquí
         Siguiente="preg6";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7013, function(sym, e) {
         // introducir código aquí
         for (var i=0; i<7; i++) {
         var pro=i+1;
         sym.$(Arrastradas[i]).hide();
         //alert(seleccionadas[i]);
         if (seleccionadas[i]=="si"){
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');					  
         	}else{
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');			  
         	}
         }
         sym.$(".caja").droppable('enable');
         
         Posicion=5;
         sym.$(Textos1[5]).show("slide", { direction: "right" }, 1000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7450, function(sym, e) {
         // introducir código aquí
         Siguiente="preg7";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8011, function(sym, e) {
         // introducir código aquí
         for (var i=0; i<6; i++) {
         var pro=i+1;
         sym.$(Arrastradas[i]).hide();
         //alert(seleccionadas[i]);
         if (seleccionadas[i]=="si"){
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');					  
         	}else{
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');			  
         	}
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8167, function(sym, e) {
         // introducir código aquí
         if(Correctas==7){
         	// Mostrar un elemento 
         	sym.$("bien").show();	
         	sym.getSymbol("bien").play(0);
         
         	// Reproducir una pista de audio 
         	sym.$("aplauso_largo")[0].play();
         
         
         }else{
         	sym.$("mal").show();	
         	sym.getSymbol("mal").play(0);
         
         	// Reproducir una pista de audio 
         	sym.$("abucheo")[0].play();
         
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7525, function(sym, e) {
         // introducir código aquí
         for (var i=0; i<7; i++) {
         var pro=i+1;
         sym.$(Arrastradas[i]).hide();
         //alert(seleccionadas[i]);
         if (seleccionadas[i]=="si"){
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');					  
         	}else{
         		sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');			  
         	}
         }
         sym.$(".caja").droppable('enable');
         
         Posicion=6;
         sym.$(Textos1[6]).show("slide", { direction: "right" }, 1000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7963, function(sym, e) {
         // introducir código aquí
         Siguiente="fin1";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9622, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnPdfCaso}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("pdf/Caso Juan Sebastian.pdf", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnPdfResult}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("pdf/Resultados valoracion Sebastian.pdf", "_blank");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${BtnIniciar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         sym.play('datos');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11146, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnSiguiente1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos2');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnSiguiente1Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnAtras}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17644, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18872, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnSiguiente1Copy3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos4');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnAtrasCopy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos2');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnSiguiente1Copy4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos5');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnAtrasCopy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnSiguiente1Copy5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos6');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnAtrasCopy3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos4');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnSiguiente1Copy6}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos7');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnAtrasCopy4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos5');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BtnAtrasCopy5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('datos6');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12651, function(sym, e) {
         
         
         sym.$(".cajasx").droppable({
           accept: sym.$(".equis"),
           drop: handleDropEventEquis,
         
         });
         
         
         
         
         function handleDropEventEquis(event, ui){		
             ui.draggable.draggable( 'disable' );
             $(this).droppable( 'disable' );
             // place draggable where needed. could be left, top
            //ui.draggable.position( { of: $(this), my: 'left', at: 'top' } );
             //ui.draggable.position( { of: $(this), my: 'center'+'top', at: 'center'+'top' } );
             ui.draggable.position( { of: $(this), my: 'center'+'top',  at: 'center'+'right'} );
             ui.draggable.draggable( 'option', 'revert', false );
         
             var elem_dropable =$(this).attr("class");
             contador2++;
         
         	claseCajasCat=elem_dropable.split(" ");
         
         	 if (claseCajasCat[2]=='catCorrectas'){
         			/*	seleccionadas[Posicion]="si";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'v.svg');	
         				sym.$('p1_'+pro+'v').show();
         
         				// Reproducir una pista de audio */
         				Correctas2++;
         				sym.$("success")[0].play();
         
         		  }else{
         				Incorrectas2++;
         				/*	seleccionadas[Posicion]="no";
         				var pro=Posicion+1;
         				sym.$('p1_'+pro+'v').attr('src','images/p1_'+pro+'r.svg');	
         				sym.$('p1_'+pro+'v').show();*/
         				sym.$("fail")[0].play();								 
         	}
         
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         
         
         sym.$(".cajasNivel").droppable({
           accept: sym.$(".porcentajes"),
           drop: handleDropEventNivel,
         
         });
         
         
         
         
         function handleDropEventNivel(event, ui){		
             ui.draggable.draggable( 'disable' );
             $(this).droppable( 'disable' );
             // place draggable where needed. could be left, top
            ui.draggable.position( { of: $(this), my: 'left', at: 'center' } );
             //ui.draggable.position( { of: $(this), my: 'center'+'top', at: 'center'+'top' } );
             //ui.draggable.position( { of: $(this), my: 'center'+'top',  at: 'center'+'top'} );
             ui.draggable.draggable( 'option', 'revert', false );
         
             var elem_dropable =$(this).attr("id");
             contador2++;
         
         
         	switch(elem_dropable) {
         
             case 'Stage_cajasNivel1':
                 var elem= $(ui.draggable).attr("id");
         
         		  //Arrastradas[Posicion]=elem.substring(6, 23);
         
         			//pregunta="pre2";
                 if (elem=='Stage_p2_d_88'){
         
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
         
             case 'Stage_cajasNivel1Copy':
                 var elem= $(ui.draggable).attr("id");
         
         		  //Arrastradas[Posicion]=elem.substring(6, 23);
         
         			//pregunta="pre2";
                 if (elem=='Stage_p2_d_60'){
         
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
             case 'Stage_cajasNivel1Copy2':
                 var elem= $(ui.draggable).attr("id");
         
         		  //Arrastradas[Posicion]=elem.substring(6, 23);
         
         			//pregunta="pre2";
                 if (elem=='Stage_p2_d_69'){
         
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
             case 'Stage_cajasNivel1Copy3':
                 var elem= $(ui.draggable).attr("id");
         
         		  //Arrastradas[Posicion]=elem.substring(6, 23);
         
         			//pregunta="pre2";
                 if (elem=='Stage_p2_d_90'){
         
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
             case 'Stage_cajasNivel1Copy4':
                 var elem= $(ui.draggable).attr("id");
         
         		  //Arrastradas[Posicion]=elem.substring(6, 23);
         
         			//pregunta="pre2";
                 if (elem=='Stage_p2_d_100'){
         
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
             case 'Stage_cajasNivel1Copy5':
                 var elem= $(ui.draggable).attr("id");
         
         		  //Arrastradas[Posicion]=elem.substring(6, 23);
         
         			//pregunta="pre2";
                 if (elem=='Stage_p2_d_89'){
         
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
             case 'Stage_cajasNivel1Copy6':
                 var elem= $(ui.draggable).attr("id");
         
         		  //Arrastradas[Posicion]=elem.substring(6, 23);
         
         			//pregunta="pre2";
                 if (elem=='Stage_p2_d_83'){
         
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
         
             }
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15276, function(sym, e) {
         
         
         sym.$(".cajasCodigos").droppable({
           accept: sym.$(".numeros"),
           drop: handleDropEventNivel,
         
         });
         
         
         
         
         function handleDropEventNivel(event, ui){		
             ui.draggable.draggable( 'disable' );
             $(this).droppable( 'disable' );
             // place draggable where needed. could be left, top
            //ui.draggable.position( { of: $(this), my: 'left', at: 'center' } );
             //ui.draggable.position( { of: $(this), my: 'center'+'top', at: 'center'+'top' } );
             ui.draggable.position( { of: $(this), my: 'center'+'top',  at: 'center'+'right'} );
             ui.draggable.draggable( 'option', 'revert', false );
         
             var elem_dropable =$(this).attr("class");
             contador2++;
         
         	claseCajas=elem_dropable.split(" ");
         //alert(claseCajas[2]);
         	switch(claseCajas[2]) {
         
             case 'clase1':
                 var elem= $(ui.draggable).attr("class");
         			
         		  clase=elem.split(" ");
         
         			//pregunta="pre2";
                 if (clase[2]=='uno'){
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
             case 'clase2':
                 var elem= $(ui.draggable).attr("class");
         
         		   clase=elem.split(" ");
         
         			//pregunta="pre2";
                 if (clase[2]=='dos'){
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
             case 'clase3':
                 var elem= $(ui.draggable).attr("class");
         
         		  clase=elem.split(" ");
         
         			//pregunta="pre2";
                 if (clase[2]=='tres'){
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
                 case 'clase4':
                 var elem= $(ui.draggable).attr("class");
         
         		 clase=elem.split(" ");
         
         			//pregunta="pre2";
                 if (clase[2]=='cuatro'){
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
             case 'clase5':
                 var elem= $(ui.draggable).attr("class");
         
         		 clase=elem.split(" ");
         
         			//pregunta="pre2";
                 if (clase[2]=='cinco'){
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
             case 'clase7':
                 var elem= $(ui.draggable).attr("class");
         
         		 clase=elem.split(" ");
         
         			//pregunta="pre2";
                 if (clase[2]=='siete'){
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
             case 'clase0':
                 var elem= $(ui.draggable).attr("class");
         
         		 clase=elem.split(" ");
         
         			//pregunta="pre2";
                 if (clase[2]=='cero'){
         				Correctas2++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         		  }else{
         				Incorrectas2++;	
         				sym.$("fail")[0].play();						 
         		  }
             break;
             default:
         				Incorrectas2++;	
         				sym.$("fail")[0].play();	
         
             }
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19175, function(sym, e) {
         // introducir código aquí
         if(Correctas2==38 && Incorrectas2==0){
         	// Mostrar un elemento 
         	sym.$("bien_1").show();	
         	sym.getSymbol("bien_1").play(0);
         
         	// Reproducir una pista de audio 
         	sym.$("aplauso_largo")[0].play();
         
         
         }else{
         	sym.$("mal_1").show();	
         	sym.getSymbol("mal_1").play(0);
         
         	// Reproducir una pista de audio 
         	sym.$("abucheo")[0].play();
         
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_fin}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('fin');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_instruccionesCopy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Mostrar un elemento 
         sym.$("intro2").show();
         
         sym.getSymbol("intro2").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8398, function(sym, e) {
         // introducir código aquí
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'intro1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Ellipse}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("intro1");
   //Edge symbol end:'intro1'

   //=========================================================
   
   //Edge symbol: 'bien'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // introducir aquí código para clic 
         
         
         sym.getComposition().getStage().play('parte2');

      });
      //Edge binding end

   })("bien");
   //Edge symbol end:'bien'

   //=========================================================
   
   //Edge symbol: 'mal'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         location.reload();
         //sym.getComposition().getStage().play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.getComposition().getStage().play('parte2');
         

      });
      //Edge binding end

   })("mal");
   //Edge symbol end:'mal'

   //=========================================================
   
   //Edge symbol: 'bien_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.close();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy2}", "click", function(sym, e) {
         
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("pdf/certificado Sebastian.pdf", "_blank");

      });
      //Edge binding end

      })("bien_1");
   //Edge symbol end:'bien_1'

   //=========================================================
   
   //Edge symbol: 'mal_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         location.reload();
         //sym.getComposition().getStage().play(0);
         

      });
         //Edge binding end

      })("mal_1");
   //Edge symbol end:'mal_1'

   //=========================================================
   
   //Edge symbol: 'intro2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Ellipse}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("intro2");
   //Edge symbol end:'intro2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-217606986");