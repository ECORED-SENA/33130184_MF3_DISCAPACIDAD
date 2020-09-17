/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.2.3.min.js",
            js+"jquery-ui.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['3px', '1px', '1280px', '600px', 'auto', 'auto'],
                            cursor: 'move',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px'],
                            userClass: ""
                        },
                        {
                            id: 'logos',
                            display: 'none',
                            type: 'image',
                            rect: ['1093px', '0px', '187px', '125px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logos.svg",'0px','0px'],
                            transform: [[],[],[],['1.8','1.8']]
                        },
                        {
                            id: 'titulo',
                            type: 'image',
                            rect: ['0', '49px', '501px', '112px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo.svg",'0px','0px']
                        },
                        {
                            id: 'menu',
                            type: 'image',
                            rect: ['-160px', '161px', '142px', '44px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"menu.svg",'0px','0px']
                        },
                        {
                            id: 'menu1',
                            type: 'image',
                            rect: ['155px', '167px', '41px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"menu1.svg",'0px','0px']
                        },
                        {
                            id: 'menu2',
                            display: 'none',
                            type: 'image',
                            rect: ['189px', '167px', '41px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"menu2.svg",'0px','0px']
                        },
                        {
                            id: 'btn_instrucciones',
                            display: 'block',
                            type: 'image',
                            rect: ['1231px', '393px', '49px', '207px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"btn_instrucciones.svg",'0px','0px']
                        },
                        {
                            id: 'btn_instruccionesCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['1231px', '393px', '49px', '207px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"btn_instrucciones.svg",'0px','0px']
                        },
                        {
                            id: 'p1_fondo_cartas',
                            display: 'none',
                            type: 'image',
                            rect: ['774px', '66px', '384px', '468px', 'auto', 'auto'],
                            opacity: '0.33093525179856',
                            fill: ["rgba(0,0,0,0)",im+"p1_fondo%20cartas.svg",'0px','0px'],
                            transform: [[],['360']]
                        },
                        {
                            id: 'p1_fondo_preguntas',
                            type: 'image',
                            rect: ['159px', '194px', '591px', '394px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_fondo_preguntas.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            display: 'block',
                            type: 'rect',
                            rect: ['155px', '426px', '113px', '145px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "caja"
                        },
                        {
                            id: 'p1_parrafo_1',
                            display: 'none',
                            type: 'image',
                            rect: ['215px', '208px', '529px', '344px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"p1_parrafo_1.svg",'0px','0px']
                        },
                        {
                            id: 'p1_parrafo_2',
                            display: 'none',
                            type: 'image',
                            rect: ['215', '205', '529px', '344px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_parrafo_2.svg",'0px','0px']
                        },
                        {
                            id: 'p1_parrafo_3',
                            display: 'none',
                            type: 'image',
                            rect: ['215', '208', '529px', '344px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_parrafo_3.svg",'0px','0px']
                        },
                        {
                            id: 'p1_parrafo_4',
                            display: 'none',
                            type: 'image',
                            rect: ['215', '208', '529px', '344px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_parrafo_4.svg",'0px','0px']
                        },
                        {
                            id: 'p1_parrafo_5',
                            display: 'none',
                            type: 'image',
                            rect: ['215', '205', '529px', '344px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_parrafo_5.svg",'0px','0px']
                        },
                        {
                            id: 'p1_parrafo_6',
                            display: 'none',
                            type: 'image',
                            rect: ['215', '208', '529px', '344px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_parrafo_6.svg",'0px','0px']
                        },
                        {
                            id: 'p1_parrafo_7',
                            display: 'none',
                            type: 'image',
                            rect: ['215', '205', '529px', '344px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_parrafo_7.svg",'0px','0px']
                        },
                        {
                            id: 'p1_carta_auditiva',
                            display: 'none',
                            type: 'image',
                            rect: ['839px', '66px', '113px', '145px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p1_carta_auditiva.svg",'0px','0px'],
                            userClass: "fichas",
                            transform: [[],[],[],['1.25664','1.25664']]
                        },
                        {
                            id: 'p1_carta_fisica',
                            type: 'image',
                            rect: ['977px', '66px', '113px', '145px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p1_carta_fisica.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'p1_carta_intelec',
                            type: 'image',
                            rect: ['775px', '226', '113px', '145px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p1_carta_intelec.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'p1_carta_multiple',
                            type: 'image',
                            rect: ['910px', '226', '113px', '145px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p1_carta_multiple.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'p1_carta_psico',
                            type: 'image',
                            rect: ['1047px', '226', '113px', '145px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p1_carta_psico.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'p1_carta_sordo',
                            type: 'image',
                            rect: ['841px', '391', '113px', '145px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p1_carta_sordo.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'p1_carta_visual',
                            display: 'none',
                            type: 'image',
                            rect: ['976px', '390px', '113px', '145px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p1_carta_visual.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'p1_1v',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['332px', '554px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_1v.svg",'0px','0px']
                        },
                        {
                            id: 'p1_2v',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['367', '555', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_2v.svg",'0px','0px']
                        },
                        {
                            id: 'p1_3v',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['400px', '554px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_3v.svg",'0px','0px']
                        },
                        {
                            id: 'p1_4v',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['435px', '555', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_4v.svg",'0px','0px']
                        },
                        {
                            id: 'p1_5v',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['471px', '554px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_5v.svg",'0px','0px']
                        },
                        {
                            id: 'p1_6v',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['504px', '555', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_6v.svg",'0px','0px']
                        },
                        {
                            id: 'p1_7v',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['539px', '554px', '33px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p1_7v.svg",'0px','0px']
                        },
                        {
                            id: 'intro1',
                            symbolName: 'intro1',
                            display: 'none',
                            type: 'rect',
                            rect: ['844', '398', '388', '165', 'auto', 'auto']
                        },
                        {
                            id: 'fail',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"fail.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'success',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"success.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'mal',
                            symbolName: 'mal',
                            display: 'none',
                            type: 'rect',
                            rect: ['4', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'btn_fin',
                            display: 'none',
                            type: 'image',
                            rect: ['909', '530', '199px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"btn_fin.svg",'0px','0px']
                        },
                        {
                            id: 'bien',
                            symbolName: 'bien',
                            display: 'none',
                            type: 'rect',
                            rect: ['4', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'aplauso_largo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"aplauso_largo.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'abucheo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"abucheo.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'p2_intro',
                            display: 'none',
                            type: 'image',
                            rect: ['305px', '623px', '623px', '359px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p2_intro.svg",'0px','0px']
                        },
                        {
                            id: 'BtnPdfCaso',
                            display: 'none',
                            type: 'rect',
                            rect: ['374px', '341px', '216px', '142px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'BtnPdfResult',
                            display: 'none',
                            type: 'rect',
                            rect: ['684px', '341px', '216px', '142px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'BtnIniciar',
                            display: 'block',
                            type: 'rect',
                            rect: ['533px', '501px', '225px', '76px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'p2_a',
                            display: 'none',
                            type: 'image',
                            rect: ['-884px', '265px', '884px', '202px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p2_a.svg",'0px','0px']
                        },
                        {
                            id: 'p2_b',
                            display: 'none',
                            type: 'image',
                            rect: ['96px', '257px', '955px', '247px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p2_b.svg",'0px','0px']
                        },
                        {
                            id: 'p2_c',
                            type: 'image',
                            rect: ['183px', '199px', '955px', '324px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p2_c.svg",'0px','0px']
                        },
                        {
                            id: 'p2_cx',
                            display: 'none',
                            type: 'image',
                            rect: ['855px', '268px', '22px', '25px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_cx.svg",'0px','0px'],
                            userClass: "equis"
                        },
                        {
                            id: 'p2_cxCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['855px', '324px', '22px', '25px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_cx.svg",'0px','0px'],
                            userClass: "equis"
                        },
                        {
                            id: 'p2_cxCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['855px', '382px', '22px', '25px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_cx.svg",'0px','0px'],
                            userClass: "equis"
                        },
                        {
                            id: 'p2_cxCopy3',
                            display: 'none',
                            type: 'image',
                            rect: ['855px', '438px', '22px', '25px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_cx.svg",'0px','0px'],
                            userClass: "equis"
                        },
                        {
                            id: 'p2_cxCopy4',
                            display: 'none',
                            type: 'image',
                            rect: ['911px', '412px', '22px', '25px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_cx.svg",'0px','0px'],
                            userClass: "equis"
                        },
                        {
                            id: 'p2_cxCopy5',
                            display: 'none',
                            type: 'image',
                            rect: ['911px', '357px', '22px', '25px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_cx.svg",'0px','0px'],
                            userClass: "equis"
                        },
                        {
                            id: 'p2_cxCopy6',
                            display: 'none',
                            type: 'image',
                            rect: ['911px', '297px', '22px', '25px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_cx.svg",'0px','0px'],
                            userClass: "equis"
                        },
                        {
                            id: 'p2_d',
                            type: 'image',
                            rect: ['108px', '205px', '955px', '364px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p2_d.svg",'0px','0px']
                        },
                        {
                            id: 'p2_d_60',
                            display: 'none',
                            type: 'image',
                            rect: ['848', '308px', '54px', '23px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_d_60.svg",'0px','0px'],
                            userClass: "porcentajes"
                        },
                        {
                            id: 'p2_d_90',
                            display: 'none',
                            type: 'image',
                            rect: ['747px', '268px', '54px', '24px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_d_90.svg",'0px','0px'],
                            userClass: "porcentajes"
                        },
                        {
                            id: 'p2_d_100',
                            display: 'none',
                            type: 'image',
                            rect: ['744px', '501px', '63px', '23px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_d_100.svg",'0px','0px'],
                            userClass: "porcentajes"
                        },
                        {
                            id: 'p2_d_89',
                            display: 'none',
                            type: 'image',
                            rect: ['750px', '421px', '52px', '23px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_d_89.svg",'0px','0px'],
                            userClass: "porcentajes"
                        },
                        {
                            id: 'p2_d_69',
                            display: 'none',
                            type: 'image',
                            rect: ['749px', '345', '48px', '24px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_d_69.svg",'0px','0px'],
                            userClass: "porcentajes"
                        },
                        {
                            id: 'p2_d_88',
                            display: 'none',
                            type: 'image',
                            rect: ['848px', '463px', '53px', '23px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_d_88.svg",'0px','0px'],
                            userClass: "porcentajes"
                        },
                        {
                            id: 'p2_d_83',
                            display: 'none',
                            type: 'image',
                            rect: ['848', '387', '52px', '23px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_d_83.svg",'0px','0px'],
                            userClass: "porcentajes"
                        },
                        {
                            id: 'p2_e',
                            type: 'image',
                            rect: ['74px', '205px', '955px', '346px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p2_e.svg",'0px','0px']
                        },
                        {
                            id: 'p2_e_0',
                            display: 'none',
                            type: 'image',
                            rect: ['955px', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_0.svg",'0px','0px'],
                            userClass: "numeros cero"
                        },
                        {
                            id: 'p2_e_0Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['921px', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_0.svg",'0px','0px'],
                            userClass: "numeros cero"
                        },
                        {
                            id: 'p2_e_0Copy2',
                            display: 'none',
                            type: 'image',
                            rect: ['886px', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_0.svg",'0px','0px'],
                            userClass: "numeros cero"
                        },
                        {
                            id: 'p2_e_7',
                            display: 'none',
                            type: 'image',
                            rect: ['849', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_7.svg",'0px','0px'],
                            userClass: "numeros siete"
                        },
                        {
                            id: 'p2_e_5',
                            display: 'none',
                            type: 'image',
                            rect: ['813', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_5.svg",'0px','0px'],
                            userClass: "numeros cinco"
                        },
                        {
                            id: 'p2_e_52',
                            display: 'none',
                            type: 'image',
                            rect: ['777', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_5.svg",'0px','0px'],
                            userClass: "numeros cinco"
                        },
                        {
                            id: 'p2_e_53',
                            display: 'none',
                            type: 'image',
                            rect: ['741', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_5.svg",'0px','0px'],
                            userClass: "numeros cinco"
                        },
                        {
                            id: 'p2_e_4',
                            display: 'none',
                            type: 'image',
                            rect: ['706', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_4.svg",'0px','0px'],
                            userClass: "numeros cuatro"
                        },
                        {
                            id: 'p2_e_42',
                            display: 'none',
                            type: 'image',
                            rect: ['670', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_4.svg",'0px','0px'],
                            userClass: "numeros cuatro"
                        },
                        {
                            id: 'p2_e_43',
                            display: 'none',
                            type: 'image',
                            rect: ['631', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_4.svg",'0px','0px'],
                            userClass: "numeros cuatro"
                        },
                        {
                            id: 'p2_e_3',
                            display: 'none',
                            type: 'image',
                            rect: ['595', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_3.svg",'0px','0px'],
                            userClass: "numeros tres"
                        },
                        {
                            id: 'p2_e_32',
                            display: 'none',
                            type: 'image',
                            rect: ['560', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_3.svg",'0px','0px'],
                            userClass: "numeros tres"
                        },
                        {
                            id: 'p2_e_33',
                            display: 'none',
                            type: 'image',
                            rect: ['520', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_3.svg",'0px','0px'],
                            userClass: "numeros tres"
                        },
                        {
                            id: 'p2_e_34',
                            display: 'none',
                            type: 'image',
                            rect: ['486', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_3.svg",'0px','0px'],
                            userClass: "numeros tres"
                        },
                        {
                            id: 'p2_e_35',
                            display: 'none',
                            type: 'image',
                            rect: ['450', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_3.svg",'0px','0px'],
                            userClass: "numeros tres"
                        },
                        {
                            id: 'p2_e_36',
                            display: 'none',
                            type: 'image',
                            rect: ['416', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_3.svg",'0px','0px'],
                            userClass: "numeros tres"
                        },
                        {
                            id: 'p2_e_2',
                            display: 'none',
                            type: 'image',
                            rect: ['378', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_2.svg",'0px','0px'],
                            userClass: "numeros dos"
                        },
                        {
                            id: 'p2_e_22',
                            display: 'none',
                            type: 'image',
                            rect: ['342', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_2.svg",'0px','0px'],
                            userClass: "numeros dos"
                        },
                        {
                            id: 'p2_e_23',
                            display: 'none',
                            type: 'image',
                            rect: ['306', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_2.svg",'0px','0px'],
                            userClass: "numeros dos"
                        },
                        {
                            id: 'p2_e_1',
                            display: 'none',
                            type: 'image',
                            rect: ['272', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_1.svg",'0px','0px'],
                            userClass: "numeros uno"
                        },
                        {
                            id: 'p2_e_12',
                            display: 'none',
                            type: 'image',
                            rect: ['235px', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_1.svg",'0px','0px'],
                            userClass: "numeros uno"
                        },
                        {
                            id: 'p2_e_13',
                            display: 'none',
                            type: 'image',
                            rect: ['200px', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_1.svg",'0px','0px'],
                            userClass: "numeros uno"
                        },
                        {
                            id: 'p2_e_14',
                            display: 'none',
                            type: 'image',
                            rect: ['164px', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_1.svg",'0px','0px'],
                            userClass: "numeros uno"
                        },
                        {
                            id: 'p2_e_15',
                            display: 'none',
                            type: 'image',
                            rect: ['127px', '512', '28px', '39px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"p2_e_1.svg",'0px','0px'],
                            userClass: "numeros uno"
                        },
                        {
                            id: 'datos3Cajas_correcta',
                            display: 'none',
                            type: 'rect',
                            rect: ['722px', '242px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx catCorrectas"
                        },
                        {
                            id: 'datos3CajasCopy',
                            display: 'none',
                            type: 'rect',
                            rect: ['604px', '242px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx"
                        },
                        {
                            id: 'datos3CajasCopy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['604px', '285px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx"
                        },
                        {
                            id: 'datos3CajasCopy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['604px', '325px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx"
                        },
                        {
                            id: 'datos3CajasCopy7',
                            display: 'none',
                            type: 'rect',
                            rect: ['604px', '365px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx catCorrectas"
                        },
                        {
                            id: 'datos3CajasCopy6',
                            display: 'none',
                            type: 'rect',
                            rect: ['604px', '408px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx catCorrectas"
                        },
                        {
                            id: 'datos3CajasCopy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['604px', '446px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx"
                        },
                        {
                            id: 'datos3CajasCopy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['604px', '485px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx catCorrectas"
                        },
                        {
                            id: 'datos3CajasCopy13',
                            display: 'none',
                            type: 'rect',
                            rect: ['722px', '285px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx catCorrectas"
                        },
                        {
                            id: 'datos3CajasCopy12',
                            display: 'none',
                            type: 'rect',
                            rect: ['722px', '325px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx catCorrectas"
                        },
                        {
                            id: 'datos3CajasCopy11',
                            display: 'none',
                            type: 'rect',
                            rect: ['722px', '365px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx"
                        },
                        {
                            id: 'datos3CajasCopy10',
                            display: 'none',
                            type: 'rect',
                            rect: ['722px', '408px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx"
                        },
                        {
                            id: 'datos3CajasCopy9',
                            display: 'none',
                            type: 'rect',
                            rect: ['722px', '446px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx catCorrectas"
                        },
                        {
                            id: 'datos3CajasCopy8',
                            display: 'none',
                            type: 'rect',
                            rect: ['722px', '485px', '48px', '32px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasx"
                        },
                        {
                            id: 'p2_f',
                            type: 'image',
                            rect: ['96px', '218px', '955px', '290px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p2_f.svg",'0px','0px']
                        },
                        {
                            id: 'p2_g',
                            type: 'image',
                            rect: ['101px', '225px', '897px', '259px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p2_g.svg",'0px','0px']
                        },
                        {
                            id: 'cajasNivel1',
                            display: 'none',
                            type: 'rect',
                            rect: ['432px', '286px', '232px', '44px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasNivel"
                        },
                        {
                            id: 'cajasNivel1Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['432px', '325px', '232px', '44px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasNivel"
                        },
                        {
                            id: 'cajasNivel1Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['432px', '365px', '232px', '44px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasNivel"
                        },
                        {
                            id: 'cajasNivel1Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['432px', '409px', '232px', '44px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasNivel"
                        },
                        {
                            id: 'cajasNivel1Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['432px', '446px', '232px', '44px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasNivel"
                        },
                        {
                            id: 'cajasNivel1Copy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['432px', '486px', '232px', '44px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasNivel"
                        },
                        {
                            id: 'cajasNivel1Copy6',
                            display: 'none',
                            type: 'rect',
                            rect: ['432px', '524px', '232px', '44px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasNivel"
                        },
                        {
                            id: 'cajasNumeros',
                            display: 'none',
                            type: 'rect',
                            rect: ['172px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase1"
                        },
                        {
                            id: 'cajasNumerosCopy',
                            display: 'none',
                            type: 'rect',
                            rect: ['199px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase2"
                        },
                        {
                            id: 'cajasNumerosCopy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['227px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase2"
                        },
                        {
                            id: 'cajasNumerosCopy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['254px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['281px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['336px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase3"
                        },
                        {
                            id: 'cajasNumerosCopy17',
                            display: 'none',
                            type: 'rect',
                            rect: ['724px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase1"
                        },
                        {
                            id: 'cajasNumerosCopy16',
                            display: 'none',
                            type: 'rect',
                            rect: ['751px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase5"
                        },
                        {
                            id: 'cajasNumerosCopy15',
                            display: 'none',
                            type: 'rect',
                            rect: ['779px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase2"
                        },
                        {
                            id: 'cajasNumerosCopy14',
                            display: 'none',
                            type: 'rect',
                            rect: ['806px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy13',
                            display: 'none',
                            type: 'rect',
                            rect: ['833px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy12',
                            display: 'none',
                            type: 'rect',
                            rect: ['888px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase3"
                        },
                        {
                            id: 'cajasNumerosCopy23',
                            display: 'none',
                            type: 'rect',
                            rect: ['172px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy22',
                            display: 'none',
                            type: 'rect',
                            rect: ['199px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy21',
                            display: 'none',
                            type: 'rect',
                            rect: ['227px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy20',
                            display: 'none',
                            type: 'rect',
                            rect: ['254px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy19',
                            display: 'none',
                            type: 'rect',
                            rect: ['281px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy18',
                            display: 'none',
                            type: 'rect',
                            rect: ['336px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy54',
                            display: 'none',
                            type: 'rect',
                            rect: ['364px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy55',
                            display: 'none',
                            type: 'rect',
                            rect: ['390px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy29',
                            display: 'none',
                            type: 'rect',
                            rect: ['450px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy28',
                            display: 'none',
                            type: 'rect',
                            rect: ['477px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy27',
                            display: 'none',
                            type: 'rect',
                            rect: ['505px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy26',
                            display: 'none',
                            type: 'rect',
                            rect: ['532px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy25',
                            display: 'none',
                            type: 'rect',
                            rect: ['559px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy57',
                            display: 'none',
                            type: 'rect',
                            rect: ['639px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy56',
                            display: 'none',
                            type: 'rect',
                            rect: ['666px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy59',
                            display: 'none',
                            type: 'rect',
                            rect: ['916px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy58',
                            display: 'none',
                            type: 'rect',
                            rect: ['943px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy24',
                            display: 'none',
                            type: 'rect',
                            rect: ['614px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy35',
                            display: 'none',
                            type: 'rect',
                            rect: ['724px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy34',
                            display: 'none',
                            type: 'rect',
                            rect: ['751px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy33',
                            display: 'none',
                            type: 'rect',
                            rect: ['779px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy32',
                            display: 'none',
                            type: 'rect',
                            rect: ['806px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy31',
                            display: 'none',
                            type: 'rect',
                            rect: ['833px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy30',
                            display: 'none',
                            type: 'rect',
                            rect: ['888px', '368px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy41',
                            display: 'none',
                            type: 'rect',
                            rect: ['172px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase1"
                        },
                        {
                            id: 'cajasNumerosCopy40',
                            display: 'none',
                            type: 'rect',
                            rect: ['199px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase5"
                        },
                        {
                            id: 'cajasNumerosCopy39',
                            display: 'none',
                            type: 'rect',
                            rect: ['227px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase5"
                        },
                        {
                            id: 'cajasNumerosCopy38',
                            display: 'none',
                            type: 'rect',
                            rect: ['254px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy37',
                            display: 'none',
                            type: 'rect',
                            rect: ['281px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy36',
                            display: 'none',
                            type: 'rect',
                            rect: ['336px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase4"
                        },
                        {
                            id: 'cajasNumerosCopy47',
                            display: 'none',
                            type: 'rect',
                            rect: ['447px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase7"
                        },
                        {
                            id: 'cajasNumerosCopy46',
                            display: 'none',
                            type: 'rect',
                            rect: ['474px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase3"
                        },
                        {
                            id: 'cajasNumerosCopy45',
                            display: 'none',
                            type: 'rect',
                            rect: ['502px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase0"
                        },
                        {
                            id: 'cajasNumerosCopy44',
                            display: 'none',
                            type: 'rect',
                            rect: ['529px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy43',
                            display: 'none',
                            type: 'rect',
                            rect: ['556px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy42',
                            display: 'none',
                            type: 'rect',
                            rect: ['611px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase4"
                        },
                        {
                            id: 'cajasNumerosCopy53',
                            display: 'none',
                            type: 'rect',
                            rect: ['724px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase3"
                        },
                        {
                            id: 'cajasNumerosCopy52',
                            display: 'none',
                            type: 'rect',
                            rect: ['751px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase1"
                        },
                        {
                            id: 'cajasNumerosCopy51',
                            display: 'none',
                            type: 'rect',
                            rect: ['779px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase0"
                        },
                        {
                            id: 'cajasNumerosCopy50',
                            display: 'none',
                            type: 'rect',
                            rect: ['806px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy49',
                            display: 'none',
                            type: 'rect',
                            rect: ['833px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy48',
                            display: 'none',
                            type: 'rect',
                            rect: ['888px', '447px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase3"
                        },
                        {
                            id: 'cajasNumerosCopy11',
                            display: 'none',
                            type: 'rect',
                            rect: ['447px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase1"
                        },
                        {
                            id: 'cajasNumerosCopy10',
                            display: 'none',
                            type: 'rect',
                            rect: ['474px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase4"
                        },
                        {
                            id: 'cajasNumerosCopy9',
                            display: 'none',
                            type: 'rect',
                            rect: ['502px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase0"
                        },
                        {
                            id: 'cajasNumerosCopy8',
                            display: 'none',
                            type: 'rect',
                            rect: ['529px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy7',
                            display: 'none',
                            type: 'rect',
                            rect: ['556px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos"
                        },
                        {
                            id: 'cajasNumerosCopy6',
                            display: 'none',
                            type: 'rect',
                            rect: ['611px', '286px', '28px', '39px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "cajasCodigos clase3"
                        },
                        {
                            id: 'BtnSiguiente1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['983px', '328px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BtnAtras',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['72px', '320px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BtnSiguiente1Copy',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['983px', '328px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BtnAtrasCopy',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['159px', '309px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BtnSiguiente1Copy3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1056px', '305px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BtnAtrasCopy2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['97px', '314px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BtnSiguiente1Copy4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['988px', '313px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BtnAtrasCopy3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['43px', '286px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BtnSiguiente1Copy5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['961px', '279px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BtnAtrasCopy4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['67px', '286px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BtnSiguiente1Copy6',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['985px', '286px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BtnAtrasCopy5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['67px', '292px', '92px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'intro2',
                            symbolName: 'intro2',
                            display: 'none',
                            type: 'rect',
                            rect: ['846', '396', '388', '165', 'auto', 'auto']
                        },
                        {
                            id: 'bien_1',
                            symbolName: 'bien_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '-8', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'mal_1',
                            symbolName: 'mal_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 19250,
                    autoPlay: true,
                    labels: {
                        "parte1": 1250,
                        "preg1": 4250,
                        "preg2": 5000,
                        "preg3": 5500,
                        "preg4": 6000,
                        "preg5": 6500,
                        "preg6": 7000,
                        "preg7": 7513,
                        "fin1": 8000,
                        "parte2": 8297,
                        "datos": 9913,
                        "datos2": 11250,
                        "datos3": 12630,
                        "datos4": 13880,
                        "datos5": 15130,
                        "datos6": 16500,
                        "datos7": 17750,
                        "fin": 19000
                    },
                    data: [
                        [
                            "eid30",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_parrafo_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${p1_fondo_preguntas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid477",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid538",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid433",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy44}",
                            'none',
                            'block'
                        ],
                        [
                            "eid494",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy44}",
                            'block',
                            'none'
                        ],
                        [
                            "eid313",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid327",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid281",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${BtnAtrasCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid282",
                            "display",
                            16509,
                            0,
                            "linear",
                            "${BtnAtrasCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid419",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid480",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid442",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy41}",
                            'none',
                            'block'
                        ],
                        [
                            "eid503",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy41}",
                            'block',
                            'none'
                        ],
                        [
                            "eid31",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_parrafo_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${p1_carta_sordo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_carta_sordo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid337",
                            "display",
                            14879,
                            0,
                            "linear",
                            "${cajasNivel1Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid344",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${cajasNivel1Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid440",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy39}",
                            'none',
                            'block'
                        ],
                        [
                            "eid501",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy39}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_5v}",
                            'none',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${p1_5v}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_5v}",
                            'block',
                            'none'
                        ],
                        [
                            "eid452",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy56}",
                            'none',
                            'block'
                        ],
                        [
                            "eid513",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy56}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            3500,
                            250,
                            "linear",
                            "${p1_carta_psico}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid255",
                            "display",
                            16500,
                            0,
                            "linear",
                            "${p2_f}",
                            'none',
                            'block'
                        ],
                        [
                            "eid256",
                            "display",
                            17750,
                            0,
                            "linear",
                            "${p2_f}",
                            'block',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_parrafo_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "rotateZ",
                            1500,
                            500,
                            "linear",
                            "${p1_fondo_cartas}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid443",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy30}",
                            'none',
                            'block'
                        ],
                        [
                            "eid504",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy30}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "scaleX",
                            4000,
                            250,
                            "linear",
                            "${p1_carta_visual}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid460",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy54}",
                            'none',
                            'block'
                        ],
                        [
                            "eid521",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy54}",
                            'block',
                            'none'
                        ],
                        [
                            "eid545",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy10}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid432",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy43}",
                            'none',
                            'block'
                        ],
                        [
                            "eid493",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy43}",
                            'block',
                            'none'
                        ],
                        [
                            "eid312",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid326",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid468",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid529",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid441",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy40}",
                            'none',
                            'block'
                        ],
                        [
                            "eid502",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy40}",
                            'block',
                            'none'
                        ],
                        [
                            "eid424",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid485",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid549",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy7}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid217",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid241",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid465",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid526",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid421",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid482",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${BtnAtras}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "display",
                            12630,
                            0,
                            "linear",
                            "${BtnAtras}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4",
                            "scaleX",
                            500,
                            250,
                            "linear",
                            "${logos}",
                            '1.8',
                            '1'
                        ],
                        [
                            "eid212",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_36}",
                            'none',
                            'block'
                        ],
                        [
                            "eid236",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_36}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_7v}",
                            'none',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${p1_7v}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_7v}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            0,
                            0,
                            "linear",
                            "${intro1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid260",
                            "opacity",
                            17750,
                            999,
                            "linear",
                            "${p2_g}",
                            '0',
                            '1'
                        ],
                        [
                            "eid475",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid536",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "opacity",
                            12630,
                            999,
                            "linear",
                            "${p2_c}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "scaleY",
                            1250,
                            250,
                            "linear",
                            "${menu1}",
                            '1.8',
                            '1'
                        ],
                        [
                            "eid449",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid510",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid130",
                            "top",
                            9913,
                            1087,
                            "linear",
                            "${p2_a}",
                            '265px',
                            '262px'
                        ],
                        [
                            "eid33",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_parrafo_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid339",
                            "display",
                            14879,
                            0,
                            "linear",
                            "${cajasNivel1Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid346",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${cajasNivel1Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "opacity",
                            15130,
                            999,
                            "linear",
                            "${p2_e}",
                            '0',
                            '1'
                        ],
                        [
                            "eid425",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy48}",
                            'none',
                            'block'
                        ],
                        [
                            "eid486",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy48}",
                            'block',
                            'none'
                        ],
                        [
                            "eid317",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid331",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid439",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy38}",
                            'none',
                            'block'
                        ],
                        [
                            "eid500",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy38}",
                            'block',
                            'none'
                        ],
                        [
                            "eid56",
                            "scaleY",
                            3250,
                            250,
                            "linear",
                            "${p1_carta_multiple}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid423",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid484",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${p2_cxCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid167",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${p2_cxCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid453",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy57}",
                            'none',
                            'block'
                        ],
                        [
                            "eid514",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy57}",
                            'block',
                            'none'
                        ],
                        [
                            "eid431",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy42}",
                            'none',
                            'block'
                        ],
                        [
                            "eid492",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid258",
                            "display",
                            17750,
                            0,
                            "linear",
                            "${p2_g}",
                            'none',
                            'block'
                        ],
                        [
                            "eid259",
                            "display",
                            19250,
                            0,
                            "linear",
                            "${p2_g}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "scaleX",
                            2500,
                            250,
                            "linear",
                            "${p1_carta_auditiva}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid192",
                            "display",
                            14662,
                            0,
                            "linear",
                            "${p2_d_88}",
                            'none',
                            'block'
                        ],
                        [
                            "eid199",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${p2_d_88}",
                            'block',
                            'none'
                        ],
                        [
                            "eid564",
                            "display",
                            0,
                            0,
                            "linear",
                            "${intro2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid208",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid232",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid437",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy36}",
                            'none',
                            'block'
                        ],
                        [
                            "eid498",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy36}",
                            'block',
                            'none'
                        ],
                        [
                            "eid558",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mal_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "scaleX",
                            500,
                            250,
                            "linear",
                            "${titulo}",
                            '1.8',
                            '1'
                        ],
                        [
                            "eid257",
                            "opacity",
                            16500,
                            999,
                            "linear",
                            "${p2_f}",
                            '0',
                            '1'
                        ],
                        [
                            "eid218",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_43}",
                            'none',
                            'block'
                        ],
                        [
                            "eid242",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_43}",
                            'block',
                            'none'
                        ],
                        [
                            "eid560",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${btn_instruccionesCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid561",
                            "display",
                            19137,
                            0,
                            "linear",
                            "${btn_instruccionesCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid454",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid515",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid55",
                            "scaleX",
                            3250,
                            250,
                            "linear",
                            "${p1_carta_multiple}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid139",
                            "display",
                            11250,
                            0,
                            "linear",
                            "${p2_b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            12630,
                            0,
                            "linear",
                            "${p2_b}",
                            'block',
                            'none'
                        ],
                        [
                            "eid319",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid333",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid473",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid534",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${p1_carta_psico}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_carta_psico}",
                            'block',
                            'none'
                        ],
                        [
                            "eid470",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid531",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${btn_instrucciones}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            500,
                            0,
                            "linear",
                            "${p1_2v}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${p1_2v}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_2v}",
                            'block',
                            'none'
                        ],
                        [
                            "eid219",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_42}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9",
                            "scaleY",
                            500,
                            250,
                            "linear",
                            "${titulo}",
                            '1.8',
                            '1'
                        ],
                        [
                            "eid555",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy15}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid68",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_carta_visual}",
                            'none',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${p1_carta_visual}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_carta_visual}",
                            'block',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${p1_carta_fisica}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_carta_fisica}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "scaleY",
                            8297,
                            1033,
                            "linear",
                            "${menu2}",
                            '1.8',
                            '1'
                        ],
                        [
                            "eid193",
                            "display",
                            14662,
                            0,
                            "linear",
                            "${p2_d_83}",
                            'none',
                            'block'
                        ],
                        [
                            "eid200",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${p2_d_83}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${p1_carta_multiple}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_carta_multiple}",
                            'block',
                            'none'
                        ],
                        [
                            "eid430",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy53}",
                            'none',
                            'block'
                        ],
                        [
                            "eid491",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy53}",
                            'block',
                            'none'
                        ],
                        [
                            "eid428",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy51}",
                            'none',
                            'block'
                        ],
                        [
                            "eid489",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy51}",
                            'block',
                            'none'
                        ],
                        [
                            "eid554",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy14}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid444",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy31}",
                            'none',
                            'block'
                        ],
                        [
                            "eid505",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy31}",
                            'block',
                            'none'
                        ],
                        [
                            "eid224",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            9913,
                            0,
                            "linear",
                            "${BtnIniciar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid556",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy12}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid542",
                            "display",
                            18500,
                            0,
                            "linear",
                            "${btn_fin}",
                            'none',
                            'block'
                        ],
                        [
                            "eid543",
                            "display",
                            19137,
                            0,
                            "linear",
                            "${btn_fin}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            500,
                            0,
                            "linear",
                            "${logos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_parrafo_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            500,
                            0,
                            "linear",
                            "${titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid553",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy6}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid340",
                            "display",
                            14879,
                            0,
                            "linear",
                            "${cajasNivel1Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid347",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${cajasNivel1Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid65",
                            "scaleY",
                            4000,
                            250,
                            "linear",
                            "${p1_carta_visual}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid436",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy47}",
                            'none',
                            'block'
                        ],
                        [
                            "eid497",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy47}",
                            'block',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${p2_cx}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${p2_cx}",
                            'block',
                            'none'
                        ],
                        [
                            "eid225",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_0Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid249",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_0Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${p1_fondo_cartas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid103",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_fondo_cartas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid53",
                            "scaleY",
                            3000,
                            250,
                            "linear",
                            "${p1_carta_intelec}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid301",
                            "display",
                            18620,
                            0,
                            "linear",
                            "${BtnAtrasCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${BtnAtrasCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid456",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid517",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy27}",
                            'block',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${BtnSiguiente1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid144",
                            "display",
                            12630,
                            0,
                            "linear",
                            "${BtnSiguiente1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${p1_carta_intelec}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_carta_intelec}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_1v}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            5161,
                            0,
                            "linear",
                            "${p1_1v}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_1v}",
                            'block',
                            'none'
                        ],
                        [
                            "eid215",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_33}",
                            'none',
                            'block'
                        ],
                        [
                            "eid239",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_33}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid551",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy11}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid128",
                            "left",
                            9913,
                            1087,
                            "linear",
                            "${p2_a}",
                            '-884px',
                            '168px'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${p1_fondo_cartas}",
                            '0.33093525179856',
                            '1'
                        ],
                        [
                            "eid211",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid235",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid434",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy45}",
                            'none',
                            'block'
                        ],
                        [
                            "eid495",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy45}",
                            'block',
                            'none'
                        ],
                        [
                            "eid307",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3Cajas_correcta}",
                            'none',
                            'block'
                        ],
                        [
                            "eid321",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3Cajas_correcta}",
                            'block',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${p2_cxCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid172",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${p2_cxCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid291",
                            "display",
                            17370,
                            0,
                            "linear",
                            "${BtnAtrasCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid292",
                            "display",
                            17750,
                            0,
                            "linear",
                            "${BtnAtrasCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid422",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid483",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid231",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid341",
                            "display",
                            14879,
                            0,
                            "linear",
                            "${cajasNivel1Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid348",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${cajasNivel1Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid187",
                            "display",
                            14662,
                            0,
                            "linear",
                            "${p2_d_60}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${p2_d_60}",
                            'block',
                            'none'
                        ],
                        [
                            "eid462",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid523",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${p1_carta_auditiva}",
                            'none',
                            'block'
                        ],
                        [
                            "eid100",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_carta_auditiva}",
                            'block',
                            'none'
                        ],
                        [
                            "eid548",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy16}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_parrafo_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid459",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy55}",
                            'none',
                            'block'
                        ],
                        [
                            "eid520",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy55}",
                            'block',
                            'none'
                        ],
                        [
                            "eid188",
                            "display",
                            14662,
                            0,
                            "linear",
                            "${p2_d_90}",
                            'none',
                            'block'
                        ],
                        [
                            "eid195",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${p2_d_90}",
                            'block',
                            'none'
                        ],
                        [
                            "eid547",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy17}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid118",
                            "top",
                            8547,
                            953,
                            "linear",
                            "${p2_intro}",
                            '623px',
                            '199px'
                        ],
                        [
                            "eid176",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${p2_cxCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid177",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${p2_cxCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid309",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid323",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien}",
                            'none',
                            'none'
                        ],
                        [
                            "eid213",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_35}",
                            'none',
                            'block'
                        ],
                        [
                            "eid237",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_35}",
                            'block',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_4v}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${p1_4v}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_4v}",
                            'block',
                            'none'
                        ],
                        [
                            "eid308",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid322",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "scaleX",
                            1250,
                            250,
                            "linear",
                            "${menu1}",
                            '1.8',
                            '1'
                        ],
                        [
                            "eid429",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy52}",
                            'none',
                            'block'
                        ],
                        [
                            "eid490",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy52}",
                            'block',
                            'none'
                        ],
                        [
                            "eid544",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy13}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid16",
                            "display",
                            0,
                            0,
                            "linear",
                            "${menu2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${menu2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid316",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid330",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid221",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_53}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_53}",
                            'block',
                            'none'
                        ],
                        [
                            "eid222",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_52}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_52}",
                            'block',
                            'none'
                        ],
                        [
                            "eid455",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid516",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            10870,
                            0,
                            "linear",
                            "${BtnSiguiente1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid142",
                            "display",
                            11250,
                            0,
                            "linear",
                            "${BtnSiguiente1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid273",
                            "display",
                            14750,
                            0,
                            "linear",
                            "${BtnAtrasCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid274",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${BtnAtrasCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid223",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid247",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid226",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_0Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid250",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_0Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid435",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy46}",
                            'none',
                            'block'
                        ],
                        [
                            "eid496",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy46}",
                            'block',
                            'none'
                        ],
                        [
                            "eid458",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy29}",
                            'none',
                            'block'
                        ],
                        [
                            "eid519",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy29}",
                            'block',
                            'none'
                        ],
                        [
                            "eid448",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy35}",
                            'none',
                            'block'
                        ],
                        [
                            "eid509",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy35}",
                            'block',
                            'none'
                        ],
                        [
                            "eid476",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid537",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid474",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid535",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid158",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${p2_cxCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid159",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${p2_cxCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${p2_cxCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid181",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${p2_cxCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid186",
                            "opacity",
                            13880,
                            999,
                            "linear",
                            "${p2_d}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${BtnSiguiente1Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid264",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${BtnSiguiente1Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid216",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid240",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid190",
                            "display",
                            14662,
                            0,
                            "linear",
                            "${p2_d_89}",
                            'none',
                            'block'
                        ],
                        [
                            "eid197",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${p2_d_89}",
                            'block',
                            'none'
                        ],
                        [
                            "eid467",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid528",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid62",
                            "scaleY",
                            3750,
                            250,
                            "linear",
                            "${p1_carta_sordo}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid265",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${BtnAtrasCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid266",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${BtnAtrasCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid210",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid234",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid335",
                            "display",
                            14879,
                            0,
                            "linear",
                            "${cajasNivel1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid342",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${cajasNivel1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid329",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid466",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid527",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid464",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid525",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${BtnPdfCaso}",
                            'none',
                            'block'
                        ],
                        [
                            "eid134",
                            "display",
                            9913,
                            0,
                            "linear",
                            "${BtnPdfCaso}",
                            'block',
                            'none'
                        ],
                        [
                            "eid463",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid524",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid189",
                            "display",
                            14662,
                            0,
                            "linear",
                            "${p2_d_100}",
                            'none',
                            'block'
                        ],
                        [
                            "eid196",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${p2_d_100}",
                            'block',
                            'none'
                        ],
                        [
                            "eid550",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy9}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid461",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid522",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            9913,
                            0,
                            "linear",
                            "${p2_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid135",
                            "display",
                            11250,
                            0,
                            "linear",
                            "${p2_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid446",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy33}",
                            'none',
                            'block'
                        ],
                        [
                            "eid507",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy33}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "left",
                            750,
                            500,
                            "easeOutBack",
                            "${menu}",
                            '-160px',
                            '88px'
                        ],
                        [
                            "eid420",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid481",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid310",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid324",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid271",
                            "display",
                            14750,
                            0,
                            "linear",
                            "${BtnSiguiente1Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${BtnSiguiente1Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${p2_e}",
                            'none',
                            'block'
                        ],
                        [
                            "eid202",
                            "display",
                            16380,
                            0,
                            "linear",
                            "${p2_e}",
                            'block',
                            'none'
                        ],
                        [
                            "eid451",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy59}",
                            'none',
                            'block'
                        ],
                        [
                            "eid512",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy59}",
                            'block',
                            'none'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            2750,
                            250,
                            "linear",
                            "${p1_carta_fisica}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid79",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mal}",
                            'none',
                            'none'
                        ],
                        [
                            "eid338",
                            "display",
                            14879,
                            0,
                            "linear",
                            "${cajasNivel1Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid345",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${cajasNivel1Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid541",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid552",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${cajasNumerosCopy8}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid427",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy50}",
                            'none',
                            'block'
                        ],
                        [
                            "eid488",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy50}",
                            'block',
                            'none'
                        ],
                        [
                            "eid450",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy58}",
                            'none',
                            'block'
                        ],
                        [
                            "eid511",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy58}",
                            'block',
                            'none'
                        ],
                        [
                            "eid457",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid518",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy28}",
                            'block',
                            'none'
                        ],
                        [
                            "eid320",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid334",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid438",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy37}",
                            'none',
                            'block'
                        ],
                        [
                            "eid499",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy37}",
                            'block',
                            'none'
                        ],
                        [
                            "eid204",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid228",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid209",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid233",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid279",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${BtnSiguiente1Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid280",
                            "display",
                            16509,
                            0,
                            "linear",
                            "${BtnSiguiente1Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid426",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy49}",
                            'none',
                            'block'
                        ],
                        [
                            "eid487",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy49}",
                            'block',
                            'none'
                        ],
                        [
                            "eid61",
                            "scaleX",
                            3750,
                            250,
                            "linear",
                            "${p1_carta_sordo}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid25",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${p1_fondo_preguntas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_fondo_preguntas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid206",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid230",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6",
                            "scaleY",
                            500,
                            250,
                            "linear",
                            "${logos}",
                            '1.8',
                            '1'
                        ],
                        [
                            "eid191",
                            "display",
                            14662,
                            0,
                            "linear",
                            "${p2_d_69}",
                            'none',
                            'block'
                        ],
                        [
                            "eid198",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${p2_d_69}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "scaleX",
                            8297,
                            1033,
                            "linear",
                            "${menu2}",
                            '1.8',
                            '1'
                        ],
                        [
                            "eid122",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${BtnPdfResult}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            9913,
                            0,
                            "linear",
                            "${BtnPdfResult}",
                            'block',
                            'none'
                        ],
                        [
                            "eid137",
                            "top",
                            11250,
                            1087,
                            "linear",
                            "${p2_b}",
                            '260px',
                            '257px'
                        ],
                        [
                            "eid318",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid332",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid214",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_34}",
                            'none',
                            'block'
                        ],
                        [
                            "eid238",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_34}",
                            'block',
                            'none'
                        ],
                        [
                            "eid478",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumeros}",
                            'none',
                            'block'
                        ],
                        [
                            "eid539",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumeros}",
                            'block',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_3v}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${p1_3v}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_3v}",
                            'block',
                            'none'
                        ],
                        [
                            "eid469",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid530",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid447",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy34}",
                            'none',
                            'block'
                        ],
                        [
                            "eid508",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy34}",
                            'block',
                            'none'
                        ],
                        [
                            "eid445",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid506",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "left",
                            11250,
                            1087,
                            "linear",
                            "${p2_b}",
                            '-956px',
                            '96px'
                        ],
                        [
                            "eid336",
                            "display",
                            14879,
                            0,
                            "linear",
                            "${cajasNivel1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid343",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${cajasNivel1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${p2_cxCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${p2_cxCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid311",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid325",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "scaleX",
                            3000,
                            250,
                            "linear",
                            "${p1_carta_intelec}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid86",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p2_intro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "display",
                            9913,
                            0,
                            "linear",
                            "${p2_intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid472",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid533",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid471",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${cajasNumerosCopy16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid532",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${cajasNumerosCopy16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_6v}",
                            'none',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            7513,
                            0,
                            "linear",
                            "${p1_6v}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${p1_6v}",
                            'block',
                            'none'
                        ],
                        [
                            "eid227",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_0}",
                            'none',
                            'block'
                        ],
                        [
                            "eid251",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_0}",
                            'block',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            13629,
                            0,
                            "linear",
                            "${datos3CajasCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid328",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${datos3CajasCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "scaleY",
                            2500,
                            250,
                            "linear",
                            "${p1_carta_auditiva}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid15",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${menu1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            8297,
                            0,
                            "linear",
                            "${menu1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            12630,
                            0,
                            "linear",
                            "${p2_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${p2_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "scaleX",
                            3500,
                            250,
                            "linear",
                            "${p1_carta_psico}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid205",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid229",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid184",
                            "display",
                            13880,
                            0,
                            "linear",
                            "${p2_d}",
                            'none',
                            'block'
                        ],
                        [
                            "eid185",
                            "display",
                            15130,
                            0,
                            "linear",
                            "${p2_d}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p1_parrafo_7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            2750,
                            250,
                            "linear",
                            "${p1_carta_fisica}",
                            '1.25664',
                            '1'
                        ],
                        [
                            "eid289",
                            "display",
                            17370,
                            0,
                            "linear",
                            "${BtnSiguiente1Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid290",
                            "display",
                            17750,
                            0,
                            "linear",
                            "${BtnSiguiente1Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid220",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${p2_e_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid244",
                            "display",
                            16379,
                            0,
                            "linear",
                            "${p2_e_4}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "intro1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'p1_istrucciones',
                            rect: ['0px', '0px', '388px', '165px', 'auto', 'auto'],
                            clip: 'rect(0px 388px 165px 383.3330078125px)',
                            fill: ['rgba(0,0,0,0)', 'images/p1_istrucciones.svg', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['349px', '6px', '39px', '48px', 'auto', 'auto'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '388px', '165px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid43",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${p1_istrucciones}",
                            [0,388,165,383.3330078125],
                            [0,388,165,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "bien": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.31)']
                        },
                        {
                            rect: ['414px', '41px', '452px', '519px', 'auto', 'auto'],
                            id: 'aviso_bien',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/p1_aviso_bien.svg', '0px', '0px']
                        },
                        {
                            rect: ['497px', '266px', '169px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${aviso_bien}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "mal": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.31)']
                        },
                        {
                            id: 'aviso_mal',
                            type: 'image',
                            rect: ['414px', '81px', '452px', '519px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/p1_aviso_mal.svg', '0px', '0px']
                        },
                        {
                            rect: ['458px', '327px', '161px', '39px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['568px', '368px', '161px', '39px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bien_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.31)']
                        },
                        {
                            rect: ['414px', '41px', '452px', '519px', 'auto', 'auto'],
                            id: 'aviso_bien',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/aviso_bien.svg', '0px', '0px']
                        },
                        {
                            rect: ['505px', '257px', '169px', '35px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['517px', '312px', '123px', '52px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${aviso_bien}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "mal_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.31)']
                        },
                        {
                            id: 'aviso_mal',
                            type: 'image',
                            rect: ['414px', '81px', '452px', '519px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/aviso_mal.svg', '0px', '0px']
                        },
                        {
                            rect: ['507px', '340px', '161px', '39px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "intro2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '388px', '165px', 'auto', 'auto'],
                            id: 'p2_instrucciones',
                            type: 'image',
                            clip: 'rect(0px 388px 165px 385.7138671875px)',
                            fill: ['rgba(0,0,0,0)', 'images/p2_instrucciones.svg', '0px', '0px']
                        },
                        {
                            rect: ['342px', '8px', '46px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '388px', '165px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid563",
                            "clip",
                            0,
                            1000,
                            "linear",
                            "${p2_instrucciones}",
                            [0,388,165,385.7138671875],
                            [0,388,165,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-217606986");
