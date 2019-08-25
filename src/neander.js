
document.write(`<html>
<head>
    <title>neander.js</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/custom.css">
    <meta name="viewport" content= "width=device-width, initial-scale=1.0"> 
</head>
<body class="bg-light">
    <div class="container bg-light">
        <div class="container-fluid fit">
            <div class="container center little-padding">
                <div class="row">
                    <div class="col">
                        <label class="strong">AC:</label>
                        <div class="display">
                            <label id="ac">0</label>
                        </div>
                    </div>
                    <div class="col">
                            <label class="strong">PC:</label>
                            <div class="display">
                                <label id="pc">0</label>
                            </div>
                        </div>
                </div>
                <br>
                <div class="row">
                    <div class="col">
                        <label class="strong">N:</label>
                        <div class="flag" id="n"></div>
                    </div>
                    <div class="col">
                            <label class="strong">Z:</label>
                            <div class="flag" id="z"></div>
                    </div>
                </div>
                <br>
                <label>(Para exportar como assemble, o que for varíavel deve iniciar com <strong>v</strong>. Exemplo: v100.<br><strong>OBS.: O v deve ser adicionado APENAS PARA EXPORTAÇÃO, caso contrário o código não irá funcionar.</strong>)</label>
                <br>
                <div class="row">
                    <div class="col-md-3">
                        <button onclick="start()" class="btn btn-dark">Rodar<br>Programa</button>
                    </div>
                    <div class="col-md-3">
                            <button onclick="exportAsJson()" class="btn btn-dark">Exportar<br>JSON</button>
                    </div>
                    <div class="col-md-3">
                            <button onclick="importJson()" class="btn btn-dark">Importar<BR>JSON</button>
                    </div>
                    <div class="col-md-3">
                            <button onclick="exportAsAssemble()" class="btn btn-dark">Exportar<BR>Assemble</button>
                    </div>
                </div>
            </div>
            
        </div>
        <hr>
        <div class="menu">
            <h5>Menu</h5>
            <a href="#inst">Instruções</a>
            <br>
            <a href="#dados">Dados</a>
            
        </div>
        <div class="container">
            <label onclick="mostraEsconde()" style="cursor: pointer;">Mostrar/Esconder área de JSON</label>
            <textarea id="json" style="width: 100%; height: 20vh; display: none" placeholder="Aqui você cola o código em JSON para importar ou recebe o resultado da exportação em JSON ou Assemble"></textarea>
        </div>
        <hr>
        <div class="container">
            <h3 style="text-align: center">Memória</h3>
            <div class="row">
                <div class="col col-border">
                    <label>End.</label>
                </div>
                <div class="col col-border">
                    <label>Dado</label>
                </div>
                <div class="col col-border">
                    <label>Mne.</label>
                </div>
            </div>
            <div class='row' id="inst"><div class='col col-border'>0</div><div class='col col-border'><input type='text' value='0' id='0' onchange='changed(0)'></div><div class='col col-border'><label id='m0'>NOP</label></div></div>
<div class='row'><div class='col col-border'>1</div><div class='col col-border'><input type='text' value='0' id='1' onchange='changed(1)'></div><div class='col col-border'><label id='m1'>NOP</label></div></div>
<div class='row'><div class='col col-border'>2</div><div class='col col-border'><input type='text' value='0' id='2' onchange='changed(2)'></div><div class='col col-border'><label id='m2'>NOP</label></div></div>
<div class='row'><div class='col col-border'>3</div><div class='col col-border'><input type='text' value='0' id='3' onchange='changed(3)'></div><div class='col col-border'><label id='m3'>NOP</label></div></div>
<div class='row'><div class='col col-border'>4</div><div class='col col-border'><input type='text' value='0' id='4' onchange='changed(4)'></div><div class='col col-border'><label id='m4'>NOP</label></div></div>
<div class='row'><div class='col col-border'>5</div><div class='col col-border'><input type='text' value='0' id='5' onchange='changed(5)'></div><div class='col col-border'><label id='m5'>NOP</label></div></div>
<div class='row'><div class='col col-border'>6</div><div class='col col-border'><input type='text' value='0' id='6' onchange='changed(6)'></div><div class='col col-border'><label id='m6'>NOP</label></div></div>
<div class='row'><div class='col col-border'>7</div><div class='col col-border'><input type='text' value='0' id='7' onchange='changed(7)'></div><div class='col col-border'><label id='m7'>NOP</label></div></div>
<div class='row'><div class='col col-border'>8</div><div class='col col-border'><input type='text' value='0' id='8' onchange='changed(8)'></div><div class='col col-border'><label id='m8'>NOP</label></div></div>
<div class='row'><div class='col col-border'>9</div><div class='col col-border'><input type='text' value='0' id='9' onchange='changed(9)'></div><div class='col col-border'><label id='m9'>NOP</label></div></div>
<div class='row'><div class='col col-border'>10</div><div class='col col-border'><input type='text' value='0' id='10' onchange='changed(10)'></div><div class='col col-border'><label id='m10'>NOP</label></div></div>
<div class='row'><div class='col col-border'>11</div><div class='col col-border'><input type='text' value='0' id='11' onchange='changed(11)'></div><div class='col col-border'><label id='m11'>NOP</label></div></div>
<div class='row'><div class='col col-border'>12</div><div class='col col-border'><input type='text' value='0' id='12' onchange='changed(12)'></div><div class='col col-border'><label id='m12'>NOP</label></div></div>
<div class='row'><div class='col col-border'>13</div><div class='col col-border'><input type='text' value='0' id='13' onchange='changed(13)'></div><div class='col col-border'><label id='m13'>NOP</label></div></div>
<div class='row'><div class='col col-border'>14</div><div class='col col-border'><input type='text' value='0' id='14' onchange='changed(14)'></div><div class='col col-border'><label id='m14'>NOP</label></div></div>
<div class='row'><div class='col col-border'>15</div><div class='col col-border'><input type='text' value='0' id='15' onchange='changed(15)'></div><div class='col col-border'><label id='m15'>NOP</label></div></div>
<div class='row'><div class='col col-border'>16</div><div class='col col-border'><input type='text' value='0' id='16' onchange='changed(16)'></div><div class='col col-border'><label id='m16'>NOP</label></div></div>
<div class='row'><div class='col col-border'>17</div><div class='col col-border'><input type='text' value='0' id='17' onchange='changed(17)'></div><div class='col col-border'><label id='m17'>NOP</label></div></div>
<div class='row'><div class='col col-border'>18</div><div class='col col-border'><input type='text' value='0' id='18' onchange='changed(18)'></div><div class='col col-border'><label id='m18'>NOP</label></div></div>
<div class='row'><div class='col col-border'>19</div><div class='col col-border'><input type='text' value='0' id='19' onchange='changed(19)'></div><div class='col col-border'><label id='m19'>NOP</label></div></div>
<div class='row'><div class='col col-border'>20</div><div class='col col-border'><input type='text' value='0' id='20' onchange='changed(20)'></div><div class='col col-border'><label id='m20'>NOP</label></div></div>
<div class='row'><div class='col col-border'>21</div><div class='col col-border'><input type='text' value='0' id='21' onchange='changed(21)'></div><div class='col col-border'><label id='m21'>NOP</label></div></div>
<div class='row'><div class='col col-border'>22</div><div class='col col-border'><input type='text' value='0' id='22' onchange='changed(22)'></div><div class='col col-border'><label id='m22'>NOP</label></div></div>
<div class='row'><div class='col col-border'>23</div><div class='col col-border'><input type='text' value='0' id='23' onchange='changed(23)'></div><div class='col col-border'><label id='m23'>NOP</label></div></div>
<div class='row'><div class='col col-border'>24</div><div class='col col-border'><input type='text' value='0' id='24' onchange='changed(24)'></div><div class='col col-border'><label id='m24'>NOP</label></div></div>
<div class='row'><div class='col col-border'>25</div><div class='col col-border'><input type='text' value='0' id='25' onchange='changed(25)'></div><div class='col col-border'><label id='m25'>NOP</label></div></div>
<div class='row'><div class='col col-border'>26</div><div class='col col-border'><input type='text' value='0' id='26' onchange='changed(26)'></div><div class='col col-border'><label id='m26'>NOP</label></div></div>
<div class='row'><div class='col col-border'>27</div><div class='col col-border'><input type='text' value='0' id='27' onchange='changed(27)'></div><div class='col col-border'><label id='m27'>NOP</label></div></div>
<div class='row'><div class='col col-border'>28</div><div class='col col-border'><input type='text' value='0' id='28' onchange='changed(28)'></div><div class='col col-border'><label id='m28'>NOP</label></div></div>
<div class='row'><div class='col col-border'>29</div><div class='col col-border'><input type='text' value='0' id='29' onchange='changed(29)'></div><div class='col col-border'><label id='m29'>NOP</label></div></div>
<div class='row'><div class='col col-border'>30</div><div class='col col-border'><input type='text' value='0' id='30' onchange='changed(30)'></div><div class='col col-border'><label id='m30'>NOP</label></div></div>
<div class='row'><div class='col col-border'>31</div><div class='col col-border'><input type='text' value='0' id='31' onchange='changed(31)'></div><div class='col col-border'><label id='m31'>NOP</label></div></div>
<div class='row'><div class='col col-border'>32</div><div class='col col-border'><input type='text' value='0' id='32' onchange='changed(32)'></div><div class='col col-border'><label id='m32'>NOP</label></div></div>
<div class='row'><div class='col col-border'>33</div><div class='col col-border'><input type='text' value='0' id='33' onchange='changed(33)'></div><div class='col col-border'><label id='m33'>NOP</label></div></div>
<div class='row'><div class='col col-border'>34</div><div class='col col-border'><input type='text' value='0' id='34' onchange='changed(34)'></div><div class='col col-border'><label id='m34'>NOP</label></div></div>
<div class='row'><div class='col col-border'>35</div><div class='col col-border'><input type='text' value='0' id='35' onchange='changed(35)'></div><div class='col col-border'><label id='m35'>NOP</label></div></div>
<div class='row'><div class='col col-border'>36</div><div class='col col-border'><input type='text' value='0' id='36' onchange='changed(36)'></div><div class='col col-border'><label id='m36'>NOP</label></div></div>
<div class='row'><div class='col col-border'>37</div><div class='col col-border'><input type='text' value='0' id='37' onchange='changed(37)'></div><div class='col col-border'><label id='m37'>NOP</label></div></div>
<div class='row'><div class='col col-border'>38</div><div class='col col-border'><input type='text' value='0' id='38' onchange='changed(38)'></div><div class='col col-border'><label id='m38'>NOP</label></div></div>
<div class='row'><div class='col col-border'>39</div><div class='col col-border'><input type='text' value='0' id='39' onchange='changed(39)'></div><div class='col col-border'><label id='m39'>NOP</label></div></div>
<div class='row'><div class='col col-border'>40</div><div class='col col-border'><input type='text' value='0' id='40' onchange='changed(40)'></div><div class='col col-border'><label id='m40'>NOP</label></div></div>
<div class='row'><div class='col col-border'>41</div><div class='col col-border'><input type='text' value='0' id='41' onchange='changed(41)'></div><div class='col col-border'><label id='m41'>NOP</label></div></div>
<div class='row'><div class='col col-border'>42</div><div class='col col-border'><input type='text' value='0' id='42' onchange='changed(42)'></div><div class='col col-border'><label id='m42'>NOP</label></div></div>
<div class='row'><div class='col col-border'>43</div><div class='col col-border'><input type='text' value='0' id='43' onchange='changed(43)'></div><div class='col col-border'><label id='m43'>NOP</label></div></div>
<div class='row'><div class='col col-border'>44</div><div class='col col-border'><input type='text' value='0' id='44' onchange='changed(44)'></div><div class='col col-border'><label id='m44'>NOP</label></div></div>
<div class='row'><div class='col col-border'>45</div><div class='col col-border'><input type='text' value='0' id='45' onchange='changed(45)'></div><div class='col col-border'><label id='m45'>NOP</label></div></div>
<div class='row'><div class='col col-border'>46</div><div class='col col-border'><input type='text' value='0' id='46' onchange='changed(46)'></div><div class='col col-border'><label id='m46'>NOP</label></div></div>
<div class='row'><div class='col col-border'>47</div><div class='col col-border'><input type='text' value='0' id='47' onchange='changed(47)'></div><div class='col col-border'><label id='m47'>NOP</label></div></div>
<div class='row'><div class='col col-border'>48</div><div class='col col-border'><input type='text' value='0' id='48' onchange='changed(48)'></div><div class='col col-border'><label id='m48'>NOP</label></div></div>
<div class='row'><div class='col col-border'>49</div><div class='col col-border'><input type='text' value='0' id='49' onchange='changed(49)'></div><div class='col col-border'><label id='m49'>NOP</label></div></div>
<div class='row'><div class='col col-border'>50</div><div class='col col-border'><input type='text' value='0' id='50' onchange='changed(50)'></div><div class='col col-border'><label id='m50'>NOP</label></div></div>
<div class='row'><div class='col col-border'>51</div><div class='col col-border'><input type='text' value='0' id='51' onchange='changed(51)'></div><div class='col col-border'><label id='m51'>NOP</label></div></div>
<div class='row'><div class='col col-border'>52</div><div class='col col-border'><input type='text' value='0' id='52' onchange='changed(52)'></div><div class='col col-border'><label id='m52'>NOP</label></div></div>
<div class='row'><div class='col col-border'>53</div><div class='col col-border'><input type='text' value='0' id='53' onchange='changed(53)'></div><div class='col col-border'><label id='m53'>NOP</label></div></div>
<div class='row'><div class='col col-border'>54</div><div class='col col-border'><input type='text' value='0' id='54' onchange='changed(54)'></div><div class='col col-border'><label id='m54'>NOP</label></div></div>
<div class='row'><div class='col col-border'>55</div><div class='col col-border'><input type='text' value='0' id='55' onchange='changed(55)'></div><div class='col col-border'><label id='m55'>NOP</label></div></div>
<div class='row'><div class='col col-border'>56</div><div class='col col-border'><input type='text' value='0' id='56' onchange='changed(56)'></div><div class='col col-border'><label id='m56'>NOP</label></div></div>
<div class='row'><div class='col col-border'>57</div><div class='col col-border'><input type='text' value='0' id='57' onchange='changed(57)'></div><div class='col col-border'><label id='m57'>NOP</label></div></div>
<div class='row'><div class='col col-border'>58</div><div class='col col-border'><input type='text' value='0' id='58' onchange='changed(58)'></div><div class='col col-border'><label id='m58'>NOP</label></div></div>
<div class='row'><div class='col col-border'>59</div><div class='col col-border'><input type='text' value='0' id='59' onchange='changed(59)'></div><div class='col col-border'><label id='m59'>NOP</label></div></div>
<div class='row'><div class='col col-border'>60</div><div class='col col-border'><input type='text' value='0' id='60' onchange='changed(60)'></div><div class='col col-border'><label id='m60'>NOP</label></div></div>
<div class='row'><div class='col col-border'>61</div><div class='col col-border'><input type='text' value='0' id='61' onchange='changed(61)'></div><div class='col col-border'><label id='m61'>NOP</label></div></div>
<div class='row'><div class='col col-border'>62</div><div class='col col-border'><input type='text' value='0' id='62' onchange='changed(62)'></div><div class='col col-border'><label id='m62'>NOP</label></div></div>
<div class='row'><div class='col col-border'>63</div><div class='col col-border'><input type='text' value='0' id='63' onchange='changed(63)'></div><div class='col col-border'><label id='m63'>NOP</label></div></div>
<div class='row'><div class='col col-border'>64</div><div class='col col-border'><input type='text' value='0' id='64' onchange='changed(64)'></div><div class='col col-border'><label id='m64'>NOP</label></div></div>
<div class='row'><div class='col col-border'>65</div><div class='col col-border'><input type='text' value='0' id='65' onchange='changed(65)'></div><div class='col col-border'><label id='m65'>NOP</label></div></div>
<div class='row'><div class='col col-border'>66</div><div class='col col-border'><input type='text' value='0' id='66' onchange='changed(66)'></div><div class='col col-border'><label id='m66'>NOP</label></div></div>
<div class='row'><div class='col col-border'>67</div><div class='col col-border'><input type='text' value='0' id='67' onchange='changed(67)'></div><div class='col col-border'><label id='m67'>NOP</label></div></div>
<div class='row'><div class='col col-border'>68</div><div class='col col-border'><input type='text' value='0' id='68' onchange='changed(68)'></div><div class='col col-border'><label id='m68'>NOP</label></div></div>
<div class='row'><div class='col col-border'>69</div><div class='col col-border'><input type='text' value='0' id='69' onchange='changed(69)'></div><div class='col col-border'><label id='m69'>NOP</label></div></div>
<div class='row'><div class='col col-border'>70</div><div class='col col-border'><input type='text' value='0' id='70' onchange='changed(70)'></div><div class='col col-border'><label id='m70'>NOP</label></div></div>
<div class='row'><div class='col col-border'>71</div><div class='col col-border'><input type='text' value='0' id='71' onchange='changed(71)'></div><div class='col col-border'><label id='m71'>NOP</label></div></div>
<div class='row'><div class='col col-border'>72</div><div class='col col-border'><input type='text' value='0' id='72' onchange='changed(72)'></div><div class='col col-border'><label id='m72'>NOP</label></div></div>
<div class='row'><div class='col col-border'>73</div><div class='col col-border'><input type='text' value='0' id='73' onchange='changed(73)'></div><div class='col col-border'><label id='m73'>NOP</label></div></div>
<div class='row'><div class='col col-border'>74</div><div class='col col-border'><input type='text' value='0' id='74' onchange='changed(74)'></div><div class='col col-border'><label id='m74'>NOP</label></div></div>
<div class='row'><div class='col col-border'>75</div><div class='col col-border'><input type='text' value='0' id='75' onchange='changed(75)'></div><div class='col col-border'><label id='m75'>NOP</label></div></div>
<div class='row'><div class='col col-border'>76</div><div class='col col-border'><input type='text' value='0' id='76' onchange='changed(76)'></div><div class='col col-border'><label id='m76'>NOP</label></div></div>
<div class='row'><div class='col col-border'>77</div><div class='col col-border'><input type='text' value='0' id='77' onchange='changed(77)'></div><div class='col col-border'><label id='m77'>NOP</label></div></div>
<div class='row'><div class='col col-border'>78</div><div class='col col-border'><input type='text' value='0' id='78' onchange='changed(78)'></div><div class='col col-border'><label id='m78'>NOP</label></div></div>
<div class='row'><div class='col col-border'>79</div><div class='col col-border'><input type='text' value='0' id='79' onchange='changed(79)'></div><div class='col col-border'><label id='m79'>NOP</label></div></div>
<div class='row'><div class='col col-border'>80</div><div class='col col-border'><input type='text' value='0' id='80' onchange='changed(80)'></div><div class='col col-border'><label id='m80'>NOP</label></div></div>
<div class='row'><div class='col col-border'>81</div><div class='col col-border'><input type='text' value='0' id='81' onchange='changed(81)'></div><div class='col col-border'><label id='m81'>NOP</label></div></div>
<div class='row'><div class='col col-border'>82</div><div class='col col-border'><input type='text' value='0' id='82' onchange='changed(82)'></div><div class='col col-border'><label id='m82'>NOP</label></div></div>
<div class='row'><div class='col col-border'>83</div><div class='col col-border'><input type='text' value='0' id='83' onchange='changed(83)'></div><div class='col col-border'><label id='m83'>NOP</label></div></div>
<div class='row'><div class='col col-border'>84</div><div class='col col-border'><input type='text' value='0' id='84' onchange='changed(84)'></div><div class='col col-border'><label id='m84'>NOP</label></div></div>
<div class='row'><div class='col col-border'>85</div><div class='col col-border'><input type='text' value='0' id='85' onchange='changed(85)'></div><div class='col col-border'><label id='m85'>NOP</label></div></div>
<div class='row'><div class='col col-border'>86</div><div class='col col-border'><input type='text' value='0' id='86' onchange='changed(86)'></div><div class='col col-border'><label id='m86'>NOP</label></div></div>
<div class='row'><div class='col col-border'>87</div><div class='col col-border'><input type='text' value='0' id='87' onchange='changed(87)'></div><div class='col col-border'><label id='m87'>NOP</label></div></div>
<div class='row'><div class='col col-border'>88</div><div class='col col-border'><input type='text' value='0' id='88' onchange='changed(88)'></div><div class='col col-border'><label id='m88'>NOP</label></div></div>
<div class='row'><div class='col col-border'>89</div><div class='col col-border'><input type='text' value='0' id='89' onchange='changed(89)'></div><div class='col col-border'><label id='m89'>NOP</label></div></div>
<div class='row'><div class='col col-border'>90</div><div class='col col-border'><input type='text' value='0' id='90' onchange='changed(90)'></div><div class='col col-border'><label id='m90'>NOP</label></div></div>
<div class='row'><div class='col col-border'>91</div><div class='col col-border'><input type='text' value='0' id='91' onchange='changed(91)'></div><div class='col col-border'><label id='m91'>NOP</label></div></div>
<div class='row'><div class='col col-border'>92</div><div class='col col-border'><input type='text' value='0' id='92' onchange='changed(92)'></div><div class='col col-border'><label id='m92'>NOP</label></div></div>
<div class='row'><div class='col col-border'>93</div><div class='col col-border'><input type='text' value='0' id='93' onchange='changed(93)'></div><div class='col col-border'><label id='m93'>NOP</label></div></div>
<div class='row'><div class='col col-border'>94</div><div class='col col-border'><input type='text' value='0' id='94' onchange='changed(94)'></div><div class='col col-border'><label id='m94'>NOP</label></div></div>
<div class='row'><div class='col col-border'>95</div><div class='col col-border'><input type='text' value='0' id='95' onchange='changed(95)'></div><div class='col col-border'><label id='m95'>NOP</label></div></div>
<div class='row'><div class='col col-border'>96</div><div class='col col-border'><input type='text' value='0' id='96' onchange='changed(96)'></div><div class='col col-border'><label id='m96'>NOP</label></div></div>
<div class='row'><div class='col col-border'>97</div><div class='col col-border'><input type='text' value='0' id='97' onchange='changed(97)'></div><div class='col col-border'><label id='m97'>NOP</label></div></div>
<div class='row'><div class='col col-border'>98</div><div class='col col-border'><input type='text' value='0' id='98' onchange='changed(98)'></div><div class='col col-border'><label id='m98'>NOP</label></div></div>
<div class='row'><div class='col col-border'>99</div><div class='col col-border'><input type='text' value='0' id='99' onchange='changed(99)'></div><div class='col col-border'><label id='m99'>NOP</label></div></div>
<div class='row'><div class='col col-border'>100</div><div class='col col-border'><input type='text' value='0' id='100' onchange='changed(100)'></div><div class='col col-border'><label id='m100'>NOP</label></div></div>
<div class='row'><div class='col col-border'>101</div><div class='col col-border'><input type='text' value='0' id='101' onchange='changed(101)'></div><div class='col col-border'><label id='m101'>NOP</label></div></div>
<div class='row'><div class='col col-border'>102</div><div class='col col-border'><input type='text' value='0' id='102' onchange='changed(102)'></div><div class='col col-border'><label id='m102'>NOP</label></div></div>
<div class='row'><div class='col col-border'>103</div><div class='col col-border'><input type='text' value='0' id='103' onchange='changed(103)'></div><div class='col col-border'><label id='m103'>NOP</label></div></div>
<div class='row'><div class='col col-border'>104</div><div class='col col-border'><input type='text' value='0' id='104' onchange='changed(104)'></div><div class='col col-border'><label id='m104'>NOP</label></div></div>
<div class='row'><div class='col col-border'>105</div><div class='col col-border'><input type='text' value='0' id='105' onchange='changed(105)'></div><div class='col col-border'><label id='m105'>NOP</label></div></div>
<div class='row'><div class='col col-border'>106</div><div class='col col-border'><input type='text' value='0' id='106' onchange='changed(106)'></div><div class='col col-border'><label id='m106'>NOP</label></div></div>
<div class='row'><div class='col col-border'>107</div><div class='col col-border'><input type='text' value='0' id='107' onchange='changed(107)'></div><div class='col col-border'><label id='m107'>NOP</label></div></div>
<div class='row'><div class='col col-border'>108</div><div class='col col-border'><input type='text' value='0' id='108' onchange='changed(108)'></div><div class='col col-border'><label id='m108'>NOP</label></div></div>
<div class='row'><div class='col col-border'>109</div><div class='col col-border'><input type='text' value='0' id='109' onchange='changed(109)'></div><div class='col col-border'><label id='m109'>NOP</label></div></div>
<div class='row'><div class='col col-border'>110</div><div class='col col-border'><input type='text' value='0' id='110' onchange='changed(110)'></div><div class='col col-border'><label id='m110'>NOP</label></div></div>
<div class='row'><div class='col col-border'>111</div><div class='col col-border'><input type='text' value='0' id='111' onchange='changed(111)'></div><div class='col col-border'><label id='m111'>NOP</label></div></div>
<div class='row'><div class='col col-border'>112</div><div class='col col-border'><input type='text' value='0' id='112' onchange='changed(112)'></div><div class='col col-border'><label id='m112'>NOP</label></div></div>
<div class='row'><div class='col col-border'>113</div><div class='col col-border'><input type='text' value='0' id='113' onchange='changed(113)'></div><div class='col col-border'><label id='m113'>NOP</label></div></div>
<div class='row'><div class='col col-border'>114</div><div class='col col-border'><input type='text' value='0' id='114' onchange='changed(114)'></div><div class='col col-border'><label id='m114'>NOP</label></div></div>
<div class='row'><div class='col col-border'>115</div><div class='col col-border'><input type='text' value='0' id='115' onchange='changed(115)'></div><div class='col col-border'><label id='m115'>NOP</label></div></div>
<div class='row'><div class='col col-border'>116</div><div class='col col-border'><input type='text' value='0' id='116' onchange='changed(116)'></div><div class='col col-border'><label id='m116'>NOP</label></div></div>
<div class='row'><div class='col col-border'>117</div><div class='col col-border'><input type='text' value='0' id='117' onchange='changed(117)'></div><div class='col col-border'><label id='m117'>NOP</label></div></div>
<div class='row'><div class='col col-border'>118</div><div class='col col-border'><input type='text' value='0' id='118' onchange='changed(118)'></div><div class='col col-border'><label id='m118'>NOP</label></div></div>
<div class='row'><div class='col col-border'>119</div><div class='col col-border'><input type='text' value='0' id='119' onchange='changed(119)'></div><div class='col col-border'><label id='m119'>NOP</label></div></div>
<div class='row'><div class='col col-border'>120</div><div class='col col-border'><input type='text' value='0' id='120' onchange='changed(120)'></div><div class='col col-border'><label id='m120'>NOP</label></div></div>
<div class='row'><div class='col col-border'>121</div><div class='col col-border'><input type='text' value='0' id='121' onchange='changed(121)'></div><div class='col col-border'><label id='m121'>NOP</label></div></div>
<div class='row'><div class='col col-border'>122</div><div class='col col-border'><input type='text' value='0' id='122' onchange='changed(122)'></div><div class='col col-border'><label id='m122'>NOP</label></div></div>
<div class='row'><div class='col col-border'>123</div><div class='col col-border'><input type='text' value='0' id='123' onchange='changed(123)'></div><div class='col col-border'><label id='m123'>NOP</label></div></div>
<div class='row'><div class='col col-border'>124</div><div class='col col-border'><input type='text' value='0' id='124' onchange='changed(124)'></div><div class='col col-border'><label id='m124'>NOP</label></div></div>
<div class='row'><div class='col col-border'>125</div><div class='col col-border'><input type='text' value='0' id='125' onchange='changed(125)'></div><div class='col col-border'><label id='m125'>NOP</label></div></div>
<div class='row'><div class='col col-border'>126</div><div class='col col-border'><input type='text' value='0' id='126' onchange='changed(126)'></div><div class='col col-border'><label id='m126'>NOP</label></div></div>
<div class='row'><div class='col col-border'>127</div><div class='col col-border'><input type='text' value='0' id='127' onchange='changed(127)'></div><div class='col col-border'><label id='m127'>NOP</label></div></div>
<div class='row' id="dados"><div class='col col-border'>128</div><div class='col col-border'><input type='text' value='0' id='128' onchange='changed(128)'></div><div class='col col-border'><label id='m128'>NOP</label></div></div>
<div class='row'><div class='col col-border'>129</div><div class='col col-border'><input type='text' value='0' id='129' onchange='changed(129)'></div><div class='col col-border'><label id='m129'>NOP</label></div></div>
<div class='row'><div class='col col-border'>130</div><div class='col col-border'><input type='text' value='0' id='130' onchange='changed(130)'></div><div class='col col-border'><label id='m130'>NOP</label></div></div>
<div class='row'><div class='col col-border'>131</div><div class='col col-border'><input type='text' value='0' id='131' onchange='changed(131)'></div><div class='col col-border'><label id='m131'>NOP</label></div></div>
<div class='row'><div class='col col-border'>132</div><div class='col col-border'><input type='text' value='0' id='132' onchange='changed(132)'></div><div class='col col-border'><label id='m132'>NOP</label></div></div>
<div class='row'><div class='col col-border'>133</div><div class='col col-border'><input type='text' value='0' id='133' onchange='changed(133)'></div><div class='col col-border'><label id='m133'>NOP</label></div></div>
<div class='row'><div class='col col-border'>134</div><div class='col col-border'><input type='text' value='0' id='134' onchange='changed(134)'></div><div class='col col-border'><label id='m134'>NOP</label></div></div>
<div class='row'><div class='col col-border'>135</div><div class='col col-border'><input type='text' value='0' id='135' onchange='changed(135)'></div><div class='col col-border'><label id='m135'>NOP</label></div></div>
<div class='row'><div class='col col-border'>136</div><div class='col col-border'><input type='text' value='0' id='136' onchange='changed(136)'></div><div class='col col-border'><label id='m136'>NOP</label></div></div>
<div class='row'><div class='col col-border'>137</div><div class='col col-border'><input type='text' value='0' id='137' onchange='changed(137)'></div><div class='col col-border'><label id='m137'>NOP</label></div></div>
<div class='row'><div class='col col-border'>138</div><div class='col col-border'><input type='text' value='0' id='138' onchange='changed(138)'></div><div class='col col-border'><label id='m138'>NOP</label></div></div>
<div class='row'><div class='col col-border'>139</div><div class='col col-border'><input type='text' value='0' id='139' onchange='changed(139)'></div><div class='col col-border'><label id='m139'>NOP</label></div></div>
<div class='row'><div class='col col-border'>140</div><div class='col col-border'><input type='text' value='0' id='140' onchange='changed(140)'></div><div class='col col-border'><label id='m140'>NOP</label></div></div>
<div class='row'><div class='col col-border'>141</div><div class='col col-border'><input type='text' value='0' id='141' onchange='changed(141)'></div><div class='col col-border'><label id='m141'>NOP</label></div></div>
<div class='row'><div class='col col-border'>142</div><div class='col col-border'><input type='text' value='0' id='142' onchange='changed(142)'></div><div class='col col-border'><label id='m142'>NOP</label></div></div>
<div class='row'><div class='col col-border'>143</div><div class='col col-border'><input type='text' value='0' id='143' onchange='changed(143)'></div><div class='col col-border'><label id='m143'>NOP</label></div></div>
<div class='row'><div class='col col-border'>144</div><div class='col col-border'><input type='text' value='0' id='144' onchange='changed(144)'></div><div class='col col-border'><label id='m144'>NOP</label></div></div>
<div class='row'><div class='col col-border'>145</div><div class='col col-border'><input type='text' value='0' id='145' onchange='changed(145)'></div><div class='col col-border'><label id='m145'>NOP</label></div></div>
<div class='row'><div class='col col-border'>146</div><div class='col col-border'><input type='text' value='0' id='146' onchange='changed(146)'></div><div class='col col-border'><label id='m146'>NOP</label></div></div>
<div class='row'><div class='col col-border'>147</div><div class='col col-border'><input type='text' value='0' id='147' onchange='changed(147)'></div><div class='col col-border'><label id='m147'>NOP</label></div></div>
<div class='row'><div class='col col-border'>148</div><div class='col col-border'><input type='text' value='0' id='148' onchange='changed(148)'></div><div class='col col-border'><label id='m148'>NOP</label></div></div>
<div class='row'><div class='col col-border'>149</div><div class='col col-border'><input type='text' value='0' id='149' onchange='changed(149)'></div><div class='col col-border'><label id='m149'>NOP</label></div></div>
<div class='row'><div class='col col-border'>150</div><div class='col col-border'><input type='text' value='0' id='150' onchange='changed(150)'></div><div class='col col-border'><label id='m150'>NOP</label></div></div>
<div class='row'><div class='col col-border'>151</div><div class='col col-border'><input type='text' value='0' id='151' onchange='changed(151)'></div><div class='col col-border'><label id='m151'>NOP</label></div></div>
<div class='row'><div class='col col-border'>152</div><div class='col col-border'><input type='text' value='0' id='152' onchange='changed(152)'></div><div class='col col-border'><label id='m152'>NOP</label></div></div>
<div class='row'><div class='col col-border'>153</div><div class='col col-border'><input type='text' value='0' id='153' onchange='changed(153)'></div><div class='col col-border'><label id='m153'>NOP</label></div></div>
<div class='row'><div class='col col-border'>154</div><div class='col col-border'><input type='text' value='0' id='154' onchange='changed(154)'></div><div class='col col-border'><label id='m154'>NOP</label></div></div>
<div class='row'><div class='col col-border'>155</div><div class='col col-border'><input type='text' value='0' id='155' onchange='changed(155)'></div><div class='col col-border'><label id='m155'>NOP</label></div></div>
<div class='row'><div class='col col-border'>156</div><div class='col col-border'><input type='text' value='0' id='156' onchange='changed(156)'></div><div class='col col-border'><label id='m156'>NOP</label></div></div>
<div class='row'><div class='col col-border'>157</div><div class='col col-border'><input type='text' value='0' id='157' onchange='changed(157)'></div><div class='col col-border'><label id='m157'>NOP</label></div></div>
<div class='row'><div class='col col-border'>158</div><div class='col col-border'><input type='text' value='0' id='158' onchange='changed(158)'></div><div class='col col-border'><label id='m158'>NOP</label></div></div>
<div class='row'><div class='col col-border'>159</div><div class='col col-border'><input type='text' value='0' id='159' onchange='changed(159)'></div><div class='col col-border'><label id='m159'>NOP</label></div></div>
<div class='row'><div class='col col-border'>160</div><div class='col col-border'><input type='text' value='0' id='160' onchange='changed(160)'></div><div class='col col-border'><label id='m160'>NOP</label></div></div>
<div class='row'><div class='col col-border'>161</div><div class='col col-border'><input type='text' value='0' id='161' onchange='changed(161)'></div><div class='col col-border'><label id='m161'>NOP</label></div></div>
<div class='row'><div class='col col-border'>162</div><div class='col col-border'><input type='text' value='0' id='162' onchange='changed(162)'></div><div class='col col-border'><label id='m162'>NOP</label></div></div>
<div class='row'><div class='col col-border'>163</div><div class='col col-border'><input type='text' value='0' id='163' onchange='changed(163)'></div><div class='col col-border'><label id='m163'>NOP</label></div></div>
<div class='row'><div class='col col-border'>164</div><div class='col col-border'><input type='text' value='0' id='164' onchange='changed(164)'></div><div class='col col-border'><label id='m164'>NOP</label></div></div>
<div class='row'><div class='col col-border'>165</div><div class='col col-border'><input type='text' value='0' id='165' onchange='changed(165)'></div><div class='col col-border'><label id='m165'>NOP</label></div></div>
<div class='row'><div class='col col-border'>166</div><div class='col col-border'><input type='text' value='0' id='166' onchange='changed(166)'></div><div class='col col-border'><label id='m166'>NOP</label></div></div>
<div class='row'><div class='col col-border'>167</div><div class='col col-border'><input type='text' value='0' id='167' onchange='changed(167)'></div><div class='col col-border'><label id='m167'>NOP</label></div></div>
<div class='row'><div class='col col-border'>168</div><div class='col col-border'><input type='text' value='0' id='168' onchange='changed(168)'></div><div class='col col-border'><label id='m168'>NOP</label></div></div>
<div class='row'><div class='col col-border'>169</div><div class='col col-border'><input type='text' value='0' id='169' onchange='changed(169)'></div><div class='col col-border'><label id='m169'>NOP</label></div></div>
<div class='row'><div class='col col-border'>170</div><div class='col col-border'><input type='text' value='0' id='170' onchange='changed(170)'></div><div class='col col-border'><label id='m170'>NOP</label></div></div>
<div class='row'><div class='col col-border'>171</div><div class='col col-border'><input type='text' value='0' id='171' onchange='changed(171)'></div><div class='col col-border'><label id='m171'>NOP</label></div></div>
<div class='row'><div class='col col-border'>172</div><div class='col col-border'><input type='text' value='0' id='172' onchange='changed(172)'></div><div class='col col-border'><label id='m172'>NOP</label></div></div>
<div class='row'><div class='col col-border'>173</div><div class='col col-border'><input type='text' value='0' id='173' onchange='changed(173)'></div><div class='col col-border'><label id='m173'>NOP</label></div></div>
<div class='row'><div class='col col-border'>174</div><div class='col col-border'><input type='text' value='0' id='174' onchange='changed(174)'></div><div class='col col-border'><label id='m174'>NOP</label></div></div>
<div class='row'><div class='col col-border'>175</div><div class='col col-border'><input type='text' value='0' id='175' onchange='changed(175)'></div><div class='col col-border'><label id='m175'>NOP</label></div></div>
<div class='row'><div class='col col-border'>176</div><div class='col col-border'><input type='text' value='0' id='176' onchange='changed(176)'></div><div class='col col-border'><label id='m176'>NOP</label></div></div>
<div class='row'><div class='col col-border'>177</div><div class='col col-border'><input type='text' value='0' id='177' onchange='changed(177)'></div><div class='col col-border'><label id='m177'>NOP</label></div></div>
<div class='row'><div class='col col-border'>178</div><div class='col col-border'><input type='text' value='0' id='178' onchange='changed(178)'></div><div class='col col-border'><label id='m178'>NOP</label></div></div>
<div class='row'><div class='col col-border'>179</div><div class='col col-border'><input type='text' value='0' id='179' onchange='changed(179)'></div><div class='col col-border'><label id='m179'>NOP</label></div></div>
<div class='row'><div class='col col-border'>180</div><div class='col col-border'><input type='text' value='0' id='180' onchange='changed(180)'></div><div class='col col-border'><label id='m180'>NOP</label></div></div>
<div class='row'><div class='col col-border'>181</div><div class='col col-border'><input type='text' value='0' id='181' onchange='changed(181)'></div><div class='col col-border'><label id='m181'>NOP</label></div></div>
<div class='row'><div class='col col-border'>182</div><div class='col col-border'><input type='text' value='0' id='182' onchange='changed(182)'></div><div class='col col-border'><label id='m182'>NOP</label></div></div>
<div class='row'><div class='col col-border'>183</div><div class='col col-border'><input type='text' value='0' id='183' onchange='changed(183)'></div><div class='col col-border'><label id='m183'>NOP</label></div></div>
<div class='row'><div class='col col-border'>184</div><div class='col col-border'><input type='text' value='0' id='184' onchange='changed(184)'></div><div class='col col-border'><label id='m184'>NOP</label></div></div>
<div class='row'><div class='col col-border'>185</div><div class='col col-border'><input type='text' value='0' id='185' onchange='changed(185)'></div><div class='col col-border'><label id='m185'>NOP</label></div></div>
<div class='row'><div class='col col-border'>186</div><div class='col col-border'><input type='text' value='0' id='186' onchange='changed(186)'></div><div class='col col-border'><label id='m186'>NOP</label></div></div>
<div class='row'><div class='col col-border'>187</div><div class='col col-border'><input type='text' value='0' id='187' onchange='changed(187)'></div><div class='col col-border'><label id='m187'>NOP</label></div></div>
<div class='row'><div class='col col-border'>188</div><div class='col col-border'><input type='text' value='0' id='188' onchange='changed(188)'></div><div class='col col-border'><label id='m188'>NOP</label></div></div>
<div class='row'><div class='col col-border'>189</div><div class='col col-border'><input type='text' value='0' id='189' onchange='changed(189)'></div><div class='col col-border'><label id='m189'>NOP</label></div></div>
<div class='row'><div class='col col-border'>190</div><div class='col col-border'><input type='text' value='0' id='190' onchange='changed(190)'></div><div class='col col-border'><label id='m190'>NOP</label></div></div>
<div class='row'><div class='col col-border'>191</div><div class='col col-border'><input type='text' value='0' id='191' onchange='changed(191)'></div><div class='col col-border'><label id='m191'>NOP</label></div></div>
<div class='row'><div class='col col-border'>192</div><div class='col col-border'><input type='text' value='0' id='192' onchange='changed(192)'></div><div class='col col-border'><label id='m192'>NOP</label></div></div>
<div class='row'><div class='col col-border'>193</div><div class='col col-border'><input type='text' value='0' id='193' onchange='changed(193)'></div><div class='col col-border'><label id='m193'>NOP</label></div></div>
<div class='row'><div class='col col-border'>194</div><div class='col col-border'><input type='text' value='0' id='194' onchange='changed(194)'></div><div class='col col-border'><label id='m194'>NOP</label></div></div>
<div class='row'><div class='col col-border'>195</div><div class='col col-border'><input type='text' value='0' id='195' onchange='changed(195)'></div><div class='col col-border'><label id='m195'>NOP</label></div></div>
<div class='row'><div class='col col-border'>196</div><div class='col col-border'><input type='text' value='0' id='196' onchange='changed(196)'></div><div class='col col-border'><label id='m196'>NOP</label></div></div>
<div class='row'><div class='col col-border'>197</div><div class='col col-border'><input type='text' value='0' id='197' onchange='changed(197)'></div><div class='col col-border'><label id='m197'>NOP</label></div></div>
<div class='row'><div class='col col-border'>198</div><div class='col col-border'><input type='text' value='0' id='198' onchange='changed(198)'></div><div class='col col-border'><label id='m198'>NOP</label></div></div>
<div class='row'><div class='col col-border'>199</div><div class='col col-border'><input type='text' value='0' id='199' onchange='changed(199)'></div><div class='col col-border'><label id='m199'>NOP</label></div></div>
<div class='row'><div class='col col-border'>200</div><div class='col col-border'><input type='text' value='0' id='200' onchange='changed(200)'></div><div class='col col-border'><label id='m200'>NOP</label></div></div>
<div class='row'><div class='col col-border'>201</div><div class='col col-border'><input type='text' value='0' id='201' onchange='changed(201)'></div><div class='col col-border'><label id='m201'>NOP</label></div></div>
<div class='row'><div class='col col-border'>202</div><div class='col col-border'><input type='text' value='0' id='202' onchange='changed(202)'></div><div class='col col-border'><label id='m202'>NOP</label></div></div>
<div class='row'><div class='col col-border'>203</div><div class='col col-border'><input type='text' value='0' id='203' onchange='changed(203)'></div><div class='col col-border'><label id='m203'>NOP</label></div></div>
<div class='row'><div class='col col-border'>204</div><div class='col col-border'><input type='text' value='0' id='204' onchange='changed(204)'></div><div class='col col-border'><label id='m204'>NOP</label></div></div>
<div class='row'><div class='col col-border'>205</div><div class='col col-border'><input type='text' value='0' id='205' onchange='changed(205)'></div><div class='col col-border'><label id='m205'>NOP</label></div></div>
<div class='row'><div class='col col-border'>206</div><div class='col col-border'><input type='text' value='0' id='206' onchange='changed(206)'></div><div class='col col-border'><label id='m206'>NOP</label></div></div>
<div class='row'><div class='col col-border'>207</div><div class='col col-border'><input type='text' value='0' id='207' onchange='changed(207)'></div><div class='col col-border'><label id='m207'>NOP</label></div></div>
<div class='row'><div class='col col-border'>208</div><div class='col col-border'><input type='text' value='0' id='208' onchange='changed(208)'></div><div class='col col-border'><label id='m208'>NOP</label></div></div>
<div class='row'><div class='col col-border'>209</div><div class='col col-border'><input type='text' value='0' id='209' onchange='changed(209)'></div><div class='col col-border'><label id='m209'>NOP</label></div></div>
<div class='row'><div class='col col-border'>210</div><div class='col col-border'><input type='text' value='0' id='210' onchange='changed(210)'></div><div class='col col-border'><label id='m210'>NOP</label></div></div>
<div class='row'><div class='col col-border'>211</div><div class='col col-border'><input type='text' value='0' id='211' onchange='changed(211)'></div><div class='col col-border'><label id='m211'>NOP</label></div></div>
<div class='row'><div class='col col-border'>212</div><div class='col col-border'><input type='text' value='0' id='212' onchange='changed(212)'></div><div class='col col-border'><label id='m212'>NOP</label></div></div>
<div class='row'><div class='col col-border'>213</div><div class='col col-border'><input type='text' value='0' id='213' onchange='changed(213)'></div><div class='col col-border'><label id='m213'>NOP</label></div></div>
<div class='row'><div class='col col-border'>214</div><div class='col col-border'><input type='text' value='0' id='214' onchange='changed(214)'></div><div class='col col-border'><label id='m214'>NOP</label></div></div>
<div class='row'><div class='col col-border'>215</div><div class='col col-border'><input type='text' value='0' id='215' onchange='changed(215)'></div><div class='col col-border'><label id='m215'>NOP</label></div></div>
<div class='row'><div class='col col-border'>216</div><div class='col col-border'><input type='text' value='0' id='216' onchange='changed(216)'></div><div class='col col-border'><label id='m216'>NOP</label></div></div>
<div class='row'><div class='col col-border'>217</div><div class='col col-border'><input type='text' value='0' id='217' onchange='changed(217)'></div><div class='col col-border'><label id='m217'>NOP</label></div></div>
<div class='row'><div class='col col-border'>218</div><div class='col col-border'><input type='text' value='0' id='218' onchange='changed(218)'></div><div class='col col-border'><label id='m218'>NOP</label></div></div>
<div class='row'><div class='col col-border'>219</div><div class='col col-border'><input type='text' value='0' id='219' onchange='changed(219)'></div><div class='col col-border'><label id='m219'>NOP</label></div></div>
<div class='row'><div class='col col-border'>220</div><div class='col col-border'><input type='text' value='0' id='220' onchange='changed(220)'></div><div class='col col-border'><label id='m220'>NOP</label></div></div>
<div class='row'><div class='col col-border'>221</div><div class='col col-border'><input type='text' value='0' id='221' onchange='changed(221)'></div><div class='col col-border'><label id='m221'>NOP</label></div></div>
<div class='row'><div class='col col-border'>222</div><div class='col col-border'><input type='text' value='0' id='222' onchange='changed(222)'></div><div class='col col-border'><label id='m222'>NOP</label></div></div>
<div class='row'><div class='col col-border'>223</div><div class='col col-border'><input type='text' value='0' id='223' onchange='changed(223)'></div><div class='col col-border'><label id='m223'>NOP</label></div></div>
<div class='row'><div class='col col-border'>224</div><div class='col col-border'><input type='text' value='0' id='224' onchange='changed(224)'></div><div class='col col-border'><label id='m224'>NOP</label></div></div>
<div class='row'><div class='col col-border'>225</div><div class='col col-border'><input type='text' value='0' id='225' onchange='changed(225)'></div><div class='col col-border'><label id='m225'>NOP</label></div></div>
<div class='row'><div class='col col-border'>226</div><div class='col col-border'><input type='text' value='0' id='226' onchange='changed(226)'></div><div class='col col-border'><label id='m226'>NOP</label></div></div>
<div class='row'><div class='col col-border'>227</div><div class='col col-border'><input type='text' value='0' id='227' onchange='changed(227)'></div><div class='col col-border'><label id='m227'>NOP</label></div></div>
<div class='row'><div class='col col-border'>228</div><div class='col col-border'><input type='text' value='0' id='228' onchange='changed(228)'></div><div class='col col-border'><label id='m228'>NOP</label></div></div>
<div class='row'><div class='col col-border'>229</div><div class='col col-border'><input type='text' value='0' id='229' onchange='changed(229)'></div><div class='col col-border'><label id='m229'>NOP</label></div></div>
<div class='row'><div class='col col-border'>230</div><div class='col col-border'><input type='text' value='0' id='230' onchange='changed(230)'></div><div class='col col-border'><label id='m230'>NOP</label></div></div>
<div class='row'><div class='col col-border'>231</div><div class='col col-border'><input type='text' value='0' id='231' onchange='changed(231)'></div><div class='col col-border'><label id='m231'>NOP</label></div></div>
<div class='row'><div class='col col-border'>232</div><div class='col col-border'><input type='text' value='0' id='232' onchange='changed(232)'></div><div class='col col-border'><label id='m232'>NOP</label></div></div>
<div class='row'><div class='col col-border'>233</div><div class='col col-border'><input type='text' value='0' id='233' onchange='changed(233)'></div><div class='col col-border'><label id='m233'>NOP</label></div></div>
<div class='row'><div class='col col-border'>234</div><div class='col col-border'><input type='text' value='0' id='234' onchange='changed(234)'></div><div class='col col-border'><label id='m234'>NOP</label></div></div>
<div class='row'><div class='col col-border'>235</div><div class='col col-border'><input type='text' value='0' id='235' onchange='changed(235)'></div><div class='col col-border'><label id='m235'>NOP</label></div></div>
<div class='row'><div class='col col-border'>236</div><div class='col col-border'><input type='text' value='0' id='236' onchange='changed(236)'></div><div class='col col-border'><label id='m236'>NOP</label></div></div>
<div class='row'><div class='col col-border'>237</div><div class='col col-border'><input type='text' value='0' id='237' onchange='changed(237)'></div><div class='col col-border'><label id='m237'>NOP</label></div></div>
<div class='row'><div class='col col-border'>238</div><div class='col col-border'><input type='text' value='0' id='238' onchange='changed(238)'></div><div class='col col-border'><label id='m238'>NOP</label></div></div>
<div class='row'><div class='col col-border'>239</div><div class='col col-border'><input type='text' value='0' id='239' onchange='changed(239)'></div><div class='col col-border'><label id='m239'>NOP</label></div></div>
<div class='row'><div class='col col-border'>240</div><div class='col col-border'><input type='text' value='0' id='240' onchange='changed(240)'></div><div class='col col-border'><label id='m240'>NOP</label></div></div>
<div class='row'><div class='col col-border'>241</div><div class='col col-border'><input type='text' value='0' id='241' onchange='changed(241)'></div><div class='col col-border'><label id='m241'>NOP</label></div></div>
<div class='row'><div class='col col-border'>242</div><div class='col col-border'><input type='text' value='0' id='242' onchange='changed(242)'></div><div class='col col-border'><label id='m242'>NOP</label></div></div>
<div class='row'><div class='col col-border'>243</div><div class='col col-border'><input type='text' value='0' id='243' onchange='changed(243)'></div><div class='col col-border'><label id='m243'>NOP</label></div></div>
<div class='row'><div class='col col-border'>244</div><div class='col col-border'><input type='text' value='0' id='244' onchange='changed(244)'></div><div class='col col-border'><label id='m244'>NOP</label></div></div>
<div class='row'><div class='col col-border'>245</div><div class='col col-border'><input type='text' value='0' id='245' onchange='changed(245)'></div><div class='col col-border'><label id='m245'>NOP</label></div></div>
<div class='row'><div class='col col-border'>246</div><div class='col col-border'><input type='text' value='0' id='246' onchange='changed(246)'></div><div class='col col-border'><label id='m246'>NOP</label></div></div>
<div class='row'><div class='col col-border'>247</div><div class='col col-border'><input type='text' value='0' id='247' onchange='changed(247)'></div><div class='col col-border'><label id='m247'>NOP</label></div></div>
<div class='row'><div class='col col-border'>248</div><div class='col col-border'><input type='text' value='0' id='248' onchange='changed(248)'></div><div class='col col-border'><label id='m248'>NOP</label></div></div>
<div class='row'><div class='col col-border'>249</div><div class='col col-border'><input type='text' value='0' id='249' onchange='changed(249)'></div><div class='col col-border'><label id='m249'>NOP</label></div></div>
<div class='row'><div class='col col-border'>250</div><div class='col col-border'><input type='text' value='0' id='250' onchange='changed(250)'></div><div class='col col-border'><label id='m250'>NOP</label></div></div>
<div class='row'><div class='col col-border'>251</div><div class='col col-border'><input type='text' value='0' id='251' onchange='changed(251)'></div><div class='col col-border'><label id='m251'>NOP</label></div></div>
<div class='row'><div class='col col-border'>252</div><div class='col col-border'><input type='text' value='0' id='252' onchange='changed(252)'></div><div class='col col-border'><label id='m252'>NOP</label></div></div>
<div class='row'><div class='col col-border'>253</div><div class='col col-border'><input type='text' value='0' id='253' onchange='changed(253)'></div><div class='col col-border'><label id='m253'>NOP</label></div></div>
<div class='row'><div class='col col-border'>254</div><div class='col col-border'><input type='text' value='0' id='254' onchange='changed(254)'></div><div class='col col-border'><label id='m254'>NOP</label></div></div>
<div class='row'><div class='col col-border'>255</div><div class='col col-border'><input type='text' value='0' id='255' onchange='changed(255)'></div><div class='col col-border'><label id='m255'>NOP</label></div></div>


        </div>
    </div>
    <script>
        var mostra_esconde = false;
        function mostraEsconde(){
            if(mostra_esconde){
                mostra_esconde = false;
                document.getElementById("json").style.display = 'none';
            }else{
                mostra_esconde = true;
                document.getElementById("json").style.display = 'block';
            }
        }
    </script>
    <script src="./js/jquery.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
</body>
</html>`);
const NOP = "NOP";
const STA = "STA";
const LDA = "LDA";
const ADD = "ADD";
const OR = "OR";
const AND = "AND";
const NOT = "NOT";
const JMP = "JMP";
const JN = "JN";
const JZ = "JZ";
const HLT = "HLT";
const DADO = "DADO";
const OPS = [{code: 00, name: NOP},
            {code: 16, name: STA},
            {code: 32, name: LDA},
            {code: 48, name: ADD},
            {code: 64, name: OR},
            {code: 80, name: AND},
            {code: 96, name: NOT},
            {code: 128, name: JMP},
            {code: 144, name: JN},
            {code: 160, name: JZ},
            {code: 240, name: HLT},];


var ac = 0;
var pc = 0;
var z = false;
var n = false;
var memory_fetches = 0;
var instructions = 0;
var curr_ac;
var bin1;
var fetched_data;
var bin2;
function changed(end){
    let content = document.getElementById(end).value;
    
    let i = 0;
    let found = false;
    let is_data = false;
    if(content.indexOf('v') != -1){
        is_data = true;
    }
    else if(parseInt(end) > 0){
        let before = document.getElementById("m"+(parseInt(end) - 1)).innerHTML;
        if(before == LDA || before == STA || before == JMP || before == JZ || before == JN
          || before == AND || before == OR || before == ADD){
              is_data = true;
          }
    }
    while(i < OPS.length && found == false && is_data == false){
        if(content == OPS[i].code || content.toString().toUpperCase() == OPS[i].name){
            document.getElementById(end).value = OPS[i].code;
            document.getElementById("m"+end).innerHTML = OPS[i].name;
            found = true;
        }
        i++;
    }
    if(found == false && is_data == false){
        document.getElementById("m"+end).innerHTML = NOP;
    }
    if(is_data == true){
        document.getElementById("m"+end).innerHTML = "DADO";
    }
}

function start(){
    let code  = createCodeArray();
    run(code);
}

function exportAsJson(){
    let code = createCodeArray();
    document.getElementById('json').value = JSON.stringify(code);
}

function importJson(){
    let code = document.getElementById('json').value;
    console.log(code);
    code = JSON.parse(code);
    for(let i = 0; i < code.length; i++){
        document.getElementById(i+"").value = code[i];
        changed(i);
    }
}

async function run(code){
    for(pc = 0; pc < code.length; pc++){
        let instruction = translate(code[pc]);
        paint(pc);
        switch(instruction){
            case LDA:
                pc++;
                lda(pc);
                memory_fetches++;
                instructions++;
            break;

            case STA:
                pc++;
                sta(pc);
                memory_fetches++;
                instructions++;
            break;

            case HLT:
                pc = 500;
                instructions++;
            break;

            case JMP:
                pc = fetch(pc + 1) - 1;
                instructions++;
            break;

            case JN:
                if(n){
                    pc = fetch(pc + 1) - 1;
                    instructions++;
                }
            break;

            case JZ:
                if(z){
                    pc = fetch(pc + 1) - 1;
                    instructions++;
                }
            break;

            case OR:
                pc++;
                curr_ac = ac.toString();
                bin1 = (+curr_ac).toString(2);
                fetched_data = fetch(fetch(pc)).toString();
                bin2 = (+fetched_data).toString(2);
                ac = or(bin1, bin2);
                instructions++;
            break;

            case NOT:
                curr_ac = ac.toString();
                bin1 = (+curr_ac).toString(2);
                ac = not(bin1);
                instructions++;
            break;

            case AND:
                pc++;
                curr_ac = ac.toString();
                bin1 = (+curr_ac).toString(2);
                fetched_data = fetch(fetch(pc)).toString();
                bin2 = (+fetched_data).toString(2);
                ac = and(bin1, bin2);
                instructions++;
            break;

            case ADD:
                pc++;
                curr_ac = ac;
                fetched_data = fetch(fetch(pc))
                ac = add(parseInt(curr_ac), parseInt(fetched_data));
                instructions++;
            break;
        }
        ac = ac.toString().replace("v", "");
        ac = parseInt(ac, 10);
        if(ac > 127){
            n = true;
            z = false;
        }else if(ac == 0){
            z = true;
            n = false;
        }else{
            z = false;
            n = false;
        }
        update(ac, pc, z, n);
        await sleep(10);
    }
}

function paint(id){
    for(let i = 0; i < 256; i++){
        document.getElementById(i+"").style.background = "white";
    }
    document.getElementById(id+"").style.background = "yellow";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function update(ac, pc, z, n){
    let zt = 'black';
    let nt = 'black';
    document.getElementById("ac").innerHTML = ac;
    if(pc == 500){
        
    }else{
        document.getElementById("pc").innerHTML = pc;
    }
    if(z){
        zt = 'greenyellow';
    }
    if(n){
        nt = 'greenyellow';
    }
    document.getElementById("z").style.background = zt
    document.getElementById("n").style.background = nt
    //document.getElementById("acessos").innerHTML = memory_fetches
    //document.getElementById("instrucoes").innerHTML = instructions
}


function exportAsAssemble(){
    let code = createCodeArray();
    let out = '';
    for(let i = 0; i < code.length; i++){
        let content = document.getElementById(i).value;
        let content2 = document.getElementById("m"+i).innerHTML;
        if(content.indexOf('v') != -1){
            out += `org ${i}\ndb ${content.replace("v", "")},`;
        }else{
            if(content2 == NOP){
                continue;
            }
            if(content2 == HLT){
                out += `HLT
                ,`;
            }else if(content2 == NOT){
                out += `NOT
                ,`;
            }
            else if(content2 == DADO){
                out += " "+content+`
                ,`;
            }else{
                out += content2;
            }
        }
    }
    let lines = out.split(",");
    out = '';
    for(let i = 0; i < lines.length; i++){
        out += (lines[i].trim())+"\n";
    }
    document.getElementById('json').value = out;
}

function translate(data){
    let i = 0;
    while(i < OPS.length){
        if(data == OPS[i].code || data.toString().toUpperCase() == OPS[i].name){
            return OPS[i].name;
        }
        i++;
    }
    return NOP;
}

function createCodeArray(){
    let array = [];
    for(let i = 0; i < 256; i++){
        array.push(document.getElementById(i+"").value);
    }
    return array;
}

function expandByte(data){
    let out = data;
    while(out.length != 8){
        out = "0"+out;
    }
    return out;
}

function not(data){
    let str = expandByte(data).split("");
    let out = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] == '0'){
            out += '1';
        }else{
            out += '0';
        }
    }
    return parseInt(out, 2);
}

function or(current_ac, data){
    let byte1 = expandByte(current_ac).split('');
    let byte2 = expandByte(data).split('');
    let out = '';
    for(let i = 0; i < byte1.length; i++){
        if(byte1[i] == '0' && byte2[i] == '0'){
            out += '0';
        }else{
            out += '1';
        }
    }
    return parseInt(out, 2);
}

function add(ac, data){
    let s_ac = ac;
    let s_data = data;
    let result = (s_ac + s_data).toString();
    result = (+result).toString(2);
    if(result.length < 8){
        return parseInt(expandByte(result), 2);
    }else if(result.length == 8){
        return parseInt(result, 2);
    }else{

        let fragments = result.split('');
        let out = '';
        while(fragments.length > 8){

            fragments.shift();
        }

        for(let i = 0; i < fragments.length; i++){
            out += fragments[i];
        }
        return parseInt(out, 2);
    }
    

}

function and(ac, data){
    let byte1 = expandByte(ac).split('');
    let byte2 = expandByte(data).split('');
    let out = '';
    for(let i = 0; i < byte1.length; i++){
        if(byte1[i] == '1' && byte2[i] == '1'){
            out += '1';
        }else{
            out += '0';
        }
    }
    return parseInt(out, 2);
}

function lda(data){
    let temp = document.getElementById(data).value
    ac = document.getElementById(temp).value;
}

function sta(data){
    let temp = document.getElementById(data).value;
    document.getElementById(temp).value = ac;
}

function fetch(data){
    memory_fetches++;
    return document.getElementById(data).value;
}



