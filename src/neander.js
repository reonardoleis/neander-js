document.write(`<html>
<head>
    <title>neanderjs</title>
</head>
<body>
    <div id="info">
        <label>AC: </label><label id="ac">0</label>
        <br>
        <label>PC: </label><label id="pc">0</label>
        <br>
        <label>Z: </label><label id="z">false</label>
        <br>
        <label>N: </label><label id="n">false</label>
        <br>
        <label>N. de Acessos: </label><label id="acessos">0</label>
        <br>
        <label>N. de Instru&ccedil&otildees: </label><label id="instrucoes">0</label>
        <br>
        <img src='inst.png'>
        <div style="position: fixed; right: 20%">
        Pular para:<br>
        <a href="#inst">Instru&ccedil&otildees</a> | <a href="#dados">Dados</a>
    </div>
        <br>
        <br>
        <button onclick="start()">INICIAR</button> 
        <button onclick="exportAsJson()">EXPORTAR(json)</button>
        <button onclick="importJson()">IMPORTAR(json)</button>
    </div>
    <hr>
    
    <div id="tabela" style="float: left">
        <table border=1>
            <tr>
                <th>End.</th><th>Valor</th><th>Mne.</th>
            </tr>
            
<tr id="inst">
<td>0</td><td><input type="text" value="0" id="0" onchange="changed(0)"/></td><td id="m0">NOP</td>
</tr> <tr>
<td>1</td><td><input type="text" value="0" id="1" onchange="changed(1)"/></td><td id="m1">NOP</td>
</tr> <tr>
<td>2</td><td><input type="text" value="0" id="2" onchange="changed(2)"/></td><td id="m2">NOP</td>
</tr> <tr>
<td>3</td><td><input type="text" value="0" id="3" onchange="changed(3)"/></td><td id="m3">NOP</td>
</tr> <tr>
<td>4</td><td><input type="text" value="0" id="4" onchange="changed(4)"/></td><td id="m4">NOP</td>
</tr> <tr>
<td>5</td><td><input type="text" value="0" id="5" onchange="changed(5)"/></td><td id="m5">NOP</td>
</tr> <tr>
<td>6</td><td><input type="text" value="0" id="6" onchange="changed(6)"/></td><td id="m6">NOP</td>
</tr> <tr>
<td>7</td><td><input type="text" value="0" id="7" onchange="changed(7)"/></td><td id="m7">NOP</td>
</tr> <tr>
<td>8</td><td><input type="text" value="0" id="8" onchange="changed(8)"/></td><td id="m8">NOP</td>
</tr> <tr>
<td>9</td><td><input type="text" value="0" id="9" onchange="changed(9)"/></td><td id="m9">NOP</td>
</tr> <tr>
<td>10</td><td><input type="text" value="0" id="10" onchange="changed(10)"/></td><td id="m10">NOP</td>
</tr> <tr>
<td>11</td><td><input type="text" value="0" id="11" onchange="changed(11)"/></td><td id="m11">NOP</td>
</tr> <tr>
<td>12</td><td><input type="text" value="0" id="12" onchange="changed(12)"/></td><td id="m12">NOP</td>
</tr> <tr>
<td>13</td><td><input type="text" value="0" id="13" onchange="changed(13)"/></td><td id="m13">NOP</td>
</tr> <tr>
<td>14</td><td><input type="text" value="0" id="14" onchange="changed(14)"/></td><td id="m14">NOP</td>
</tr> <tr>
<td>15</td><td><input type="text" value="0" id="15" onchange="changed(15)"/></td><td id="m15">NOP</td>
</tr> <tr>
<td>16</td><td><input type="text" value="0" id="16" onchange="changed(16)"/></td><td id="m16">NOP</td>
</tr> <tr>
<td>17</td><td><input type="text" value="0" id="17" onchange="changed(17)"/></td><td id="m17">NOP</td>
</tr> <tr>
<td>18</td><td><input type="text" value="0" id="18" onchange="changed(18)"/></td><td id="m18">NOP</td>
</tr> <tr>
<td>19</td><td><input type="text" value="0" id="19" onchange="changed(19)"/></td><td id="m19">NOP</td>
</tr> <tr>
<td>20</td><td><input type="text" value="0" id="20" onchange="changed(20)"/></td><td id="m20">NOP</td>
</tr> <tr>
<td>21</td><td><input type="text" value="0" id="21" onchange="changed(21)"/></td><td id="m21">NOP</td>
</tr> <tr>
<td>22</td><td><input type="text" value="0" id="22" onchange="changed(22)"/></td><td id="m22">NOP</td>
</tr> <tr>
<td>23</td><td><input type="text" value="0" id="23" onchange="changed(23)"/></td><td id="m23">NOP</td>
</tr> <tr>
<td>24</td><td><input type="text" value="0" id="24" onchange="changed(24)"/></td><td id="m24">NOP</td>
</tr> <tr>
<td>25</td><td><input type="text" value="0" id="25" onchange="changed(25)"/></td><td id="m25">NOP</td>
</tr> <tr>
<td>26</td><td><input type="text" value="0" id="26" onchange="changed(26)"/></td><td id="m26">NOP</td>
</tr> <tr>
<td>27</td><td><input type="text" value="0" id="27" onchange="changed(27)"/></td><td id="m27">NOP</td>
</tr> <tr>
<td>28</td><td><input type="text" value="0" id="28" onchange="changed(28)"/></td><td id="m28">NOP</td>
</tr> <tr>
<td>29</td><td><input type="text" value="0" id="29" onchange="changed(29)"/></td><td id="m29">NOP</td>
</tr> <tr>
<td>30</td><td><input type="text" value="0" id="30" onchange="changed(30)"/></td><td id="m30">NOP</td>
</tr> <tr>
<td>31</td><td><input type="text" value="0" id="31" onchange="changed(31)"/></td><td id="m31">NOP</td>
</tr> <tr>
<td>32</td><td><input type="text" value="0" id="32" onchange="changed(32)"/></td><td id="m32">NOP</td>
</tr> <tr>
<td>33</td><td><input type="text" value="0" id="33" onchange="changed(33)"/></td><td id="m33">NOP</td>
</tr> <tr>
<td>34</td><td><input type="text" value="0" id="34" onchange="changed(34)"/></td><td id="m34">NOP</td>
</tr> <tr>
<td>35</td><td><input type="text" value="0" id="35" onchange="changed(35)"/></td><td id="m35">NOP</td>
</tr> <tr>
<td>36</td><td><input type="text" value="0" id="36" onchange="changed(36)"/></td><td id="m36">NOP</td>
</tr> <tr>
<td>37</td><td><input type="text" value="0" id="37" onchange="changed(37)"/></td><td id="m37">NOP</td>
</tr> <tr>
<td>38</td><td><input type="text" value="0" id="38" onchange="changed(38)"/></td><td id="m38">NOP</td>
</tr> <tr>
<td>39</td><td><input type="text" value="0" id="39" onchange="changed(39)"/></td><td id="m39">NOP</td>
</tr> <tr>
<td>40</td><td><input type="text" value="0" id="40" onchange="changed(40)"/></td><td id="m40">NOP</td>
</tr> <tr>
<td>41</td><td><input type="text" value="0" id="41" onchange="changed(41)"/></td><td id="m41">NOP</td>
</tr> <tr>
<td>42</td><td><input type="text" value="0" id="42" onchange="changed(42)"/></td><td id="m42">NOP</td>
</tr> <tr>
<td>43</td><td><input type="text" value="0" id="43" onchange="changed(43)"/></td><td id="m43">NOP</td>
</tr> <tr>
<td>44</td><td><input type="text" value="0" id="44" onchange="changed(44)"/></td><td id="m44">NOP</td>
</tr> <tr>
<td>45</td><td><input type="text" value="0" id="45" onchange="changed(45)"/></td><td id="m45">NOP</td>
</tr> <tr>
<td>46</td><td><input type="text" value="0" id="46" onchange="changed(46)"/></td><td id="m46">NOP</td>
</tr> <tr>
<td>47</td><td><input type="text" value="0" id="47" onchange="changed(47)"/></td><td id="m47">NOP</td>
</tr> <tr>
<td>48</td><td><input type="text" value="0" id="48" onchange="changed(48)"/></td><td id="m48">NOP</td>
</tr> <tr>
<td>49</td><td><input type="text" value="0" id="49" onchange="changed(49)"/></td><td id="m49">NOP</td>
</tr> <tr>
<td>50</td><td><input type="text" value="0" id="50" onchange="changed(50)"/></td><td id="m50">NOP</td>
</tr> <tr>
<td>51</td><td><input type="text" value="0" id="51" onchange="changed(51)"/></td><td id="m51">NOP</td>
</tr> <tr>
<td>52</td><td><input type="text" value="0" id="52" onchange="changed(52)"/></td><td id="m52">NOP</td>
</tr> <tr>
<td>53</td><td><input type="text" value="0" id="53" onchange="changed(53)"/></td><td id="m53">NOP</td>
</tr> <tr>
<td>54</td><td><input type="text" value="0" id="54" onchange="changed(54)"/></td><td id="m54">NOP</td>
</tr> <tr>
<td>55</td><td><input type="text" value="0" id="55" onchange="changed(55)"/></td><td id="m55">NOP</td>
</tr> <tr>
<td>56</td><td><input type="text" value="0" id="56" onchange="changed(56)"/></td><td id="m56">NOP</td>
</tr> <tr>
<td>57</td><td><input type="text" value="0" id="57" onchange="changed(57)"/></td><td id="m57">NOP</td>
</tr> <tr>
<td>58</td><td><input type="text" value="0" id="58" onchange="changed(58)"/></td><td id="m58">NOP</td>
</tr> <tr>
<td>59</td><td><input type="text" value="0" id="59" onchange="changed(59)"/></td><td id="m59">NOP</td>
</tr> <tr>
<td>60</td><td><input type="text" value="0" id="60" onchange="changed(60)"/></td><td id="m60">NOP</td>
</tr> <tr>
<td>61</td><td><input type="text" value="0" id="61" onchange="changed(61)"/></td><td id="m61">NOP</td>
</tr> <tr>
<td>62</td><td><input type="text" value="0" id="62" onchange="changed(62)"/></td><td id="m62">NOP</td>
</tr> <tr>
<td>63</td><td><input type="text" value="0" id="63" onchange="changed(63)"/></td><td id="m63">NOP</td>
</tr> <tr>
<td>64</td><td><input type="text" value="0" id="64" onchange="changed(64)"/></td><td id="m64">NOP</td>
</tr> <tr>
<td>65</td><td><input type="text" value="0" id="65" onchange="changed(65)"/></td><td id="m65">NOP</td>
</tr> <tr>
<td>66</td><td><input type="text" value="0" id="66" onchange="changed(66)"/></td><td id="m66">NOP</td>
</tr> <tr>
<td>67</td><td><input type="text" value="0" id="67" onchange="changed(67)"/></td><td id="m67">NOP</td>
</tr> <tr>
<td>68</td><td><input type="text" value="0" id="68" onchange="changed(68)"/></td><td id="m68">NOP</td>
</tr> <tr>
<td>69</td><td><input type="text" value="0" id="69" onchange="changed(69)"/></td><td id="m69">NOP</td>
</tr> <tr>
<td>70</td><td><input type="text" value="0" id="70" onchange="changed(70)"/></td><td id="m70">NOP</td>
</tr> <tr>
<td>71</td><td><input type="text" value="0" id="71" onchange="changed(71)"/></td><td id="m71">NOP</td>
</tr> <tr>
<td>72</td><td><input type="text" value="0" id="72" onchange="changed(72)"/></td><td id="m72">NOP</td>
</tr> <tr>
<td>73</td><td><input type="text" value="0" id="73" onchange="changed(73)"/></td><td id="m73">NOP</td>
</tr> <tr>
<td>74</td><td><input type="text" value="0" id="74" onchange="changed(74)"/></td><td id="m74">NOP</td>
</tr> <tr>
<td>75</td><td><input type="text" value="0" id="75" onchange="changed(75)"/></td><td id="m75">NOP</td>
</tr> <tr>
<td>76</td><td><input type="text" value="0" id="76" onchange="changed(76)"/></td><td id="m76">NOP</td>
</tr> <tr>
<td>77</td><td><input type="text" value="0" id="77" onchange="changed(77)"/></td><td id="m77">NOP</td>
</tr> <tr>
<td>78</td><td><input type="text" value="0" id="78" onchange="changed(78)"/></td><td id="m78">NOP</td>
</tr> <tr>
<td>79</td><td><input type="text" value="0" id="79" onchange="changed(79)"/></td><td id="m79">NOP</td>
</tr> <tr>
<td>80</td><td><input type="text" value="0" id="80" onchange="changed(80)"/></td><td id="m80">NOP</td>
</tr> <tr>
<td>81</td><td><input type="text" value="0" id="81" onchange="changed(81)"/></td><td id="m81">NOP</td>
</tr> <tr>
<td>82</td><td><input type="text" value="0" id="82" onchange="changed(82)"/></td><td id="m82">NOP</td>
</tr> <tr>
<td>83</td><td><input type="text" value="0" id="83" onchange="changed(83)"/></td><td id="m83">NOP</td>
</tr> <tr>
<td>84</td><td><input type="text" value="0" id="84" onchange="changed(84)"/></td><td id="m84">NOP</td>
</tr> <tr>
<td>85</td><td><input type="text" value="0" id="85" onchange="changed(85)"/></td><td id="m85">NOP</td>
</tr> <tr>
<td>86</td><td><input type="text" value="0" id="86" onchange="changed(86)"/></td><td id="m86">NOP</td>
</tr> <tr>
<td>87</td><td><input type="text" value="0" id="87" onchange="changed(87)"/></td><td id="m87">NOP</td>
</tr> <tr>
<td>88</td><td><input type="text" value="0" id="88" onchange="changed(88)"/></td><td id="m88">NOP</td>
</tr> <tr>
<td>89</td><td><input type="text" value="0" id="89" onchange="changed(89)"/></td><td id="m89">NOP</td>
</tr> <tr>
<td>90</td><td><input type="text" value="0" id="90" onchange="changed(90)"/></td><td id="m90">NOP</td>
</tr> <tr>
<td>91</td><td><input type="text" value="0" id="91" onchange="changed(91)"/></td><td id="m91">NOP</td>
</tr> <tr>
<td>92</td><td><input type="text" value="0" id="92" onchange="changed(92)"/></td><td id="m92">NOP</td>
</tr> <tr>
<td>93</td><td><input type="text" value="0" id="93" onchange="changed(93)"/></td><td id="m93">NOP</td>
</tr> <tr>
<td>94</td><td><input type="text" value="0" id="94" onchange="changed(94)"/></td><td id="m94">NOP</td>
</tr> <tr>
<td>95</td><td><input type="text" value="0" id="95" onchange="changed(95)"/></td><td id="m95">NOP</td>
</tr> <tr>
<td>96</td><td><input type="text" value="0" id="96" onchange="changed(96)"/></td><td id="m96">NOP</td>
</tr> <tr>
<td>97</td><td><input type="text" value="0" id="97" onchange="changed(97)"/></td><td id="m97">NOP</td>
</tr> <tr>
<td>98</td><td><input type="text" value="0" id="98" onchange="changed(98)"/></td><td id="m98">NOP</td>
</tr> <tr>
<td>99</td><td><input type="text" value="0" id="99" onchange="changed(99)"/></td><td id="m99">NOP</td>
</tr> <tr>
<td>100</td><td><input type="text" value="0" id="100" onchange="changed(100)"/></td><td id="m100">NOP</td>
</tr> <tr>
<td>101</td><td><input type="text" value="0" id="101" onchange="changed(101)"/></td><td id="m101">NOP</td>
</tr> <tr>
<td>102</td><td><input type="text" value="0" id="102" onchange="changed(102)"/></td><td id="m102">NOP</td>
</tr> <tr>
<td>103</td><td><input type="text" value="0" id="103" onchange="changed(103)"/></td><td id="m103">NOP</td>
</tr> <tr>
<td>104</td><td><input type="text" value="0" id="104" onchange="changed(104)"/></td><td id="m104">NOP</td>
</tr> <tr>
<td>105</td><td><input type="text" value="0" id="105" onchange="changed(105)"/></td><td id="m105">NOP</td>
</tr> <tr>
<td>106</td><td><input type="text" value="0" id="106" onchange="changed(106)"/></td><td id="m106">NOP</td>
</tr> <tr>
<td>107</td><td><input type="text" value="0" id="107" onchange="changed(107)"/></td><td id="m107">NOP</td>
</tr> <tr>
<td>108</td><td><input type="text" value="0" id="108" onchange="changed(108)"/></td><td id="m108">NOP</td>
</tr> <tr>
<td>109</td><td><input type="text" value="0" id="109" onchange="changed(109)"/></td><td id="m109">NOP</td>
</tr> <tr>
<td>110</td><td><input type="text" value="0" id="110" onchange="changed(110)"/></td><td id="m110">NOP</td>
</tr> <tr>
<td>111</td><td><input type="text" value="0" id="111" onchange="changed(111)"/></td><td id="m111">NOP</td>
</tr> <tr>
<td>112</td><td><input type="text" value="0" id="112" onchange="changed(112)"/></td><td id="m112">NOP</td>
</tr> <tr>
<td>113</td><td><input type="text" value="0" id="113" onchange="changed(113)"/></td><td id="m113">NOP</td>
</tr> <tr>
<td>114</td><td><input type="text" value="0" id="114" onchange="changed(114)"/></td><td id="m114">NOP</td>
</tr> <tr>
<td>115</td><td><input type="text" value="0" id="115" onchange="changed(115)"/></td><td id="m115">NOP</td>
</tr> <tr>
<td>116</td><td><input type="text" value="0" id="116" onchange="changed(116)"/></td><td id="m116">NOP</td>
</tr> <tr>
<td>117</td><td><input type="text" value="0" id="117" onchange="changed(117)"/></td><td id="m117">NOP</td>
</tr> <tr>
<td>118</td><td><input type="text" value="0" id="118" onchange="changed(118)"/></td><td id="m118">NOP</td>
</tr> <tr>
<td>119</td><td><input type="text" value="0" id="119" onchange="changed(119)"/></td><td id="m119">NOP</td>
</tr> <tr>
<td>120</td><td><input type="text" value="0" id="120" onchange="changed(120)"/></td><td id="m120">NOP</td>
</tr> <tr>
<td>121</td><td><input type="text" value="0" id="121" onchange="changed(121)"/></td><td id="m121">NOP</td>
</tr> <tr>
<td>122</td><td><input type="text" value="0" id="122" onchange="changed(122)"/></td><td id="m122">NOP</td>
</tr> <tr>
<td>123</td><td><input type="text" value="0" id="123" onchange="changed(123)"/></td><td id="m123">NOP</td>
</tr> <tr>
<td>124</td><td><input type="text" value="0" id="124" onchange="changed(124)"/></td><td id="m124">NOP</td>
</tr> <tr>
<td>125</td><td><input type="text" value="0" id="125" onchange="changed(125)"/></td><td id="m125">NOP</td>
</tr> <tr>
<td>126</td><td><input type="text" value="0" id="126" onchange="changed(126)"/></td><td id="m126">NOP</td>
</tr> <tr>
<td>127</td><td><input type="text" value="0" id="127" onchange="changed(127)"/></td><td id="m127">NOP</td>
</tr> <tr id="dados">
<td>128</td><td><input type="text" value="0" id="128" onchange="changed(128)"/></td><td id="m128">NOP</td>
</tr> <tr>
<td>129</td><td><input type="text" value="0" id="129" onchange="changed(129)"/></td><td id="m129">NOP</td>
</tr> <tr>
<td>130</td><td><input type="text" value="0" id="130" onchange="changed(130)"/></td><td id="m130">NOP</td>
</tr> <tr>
<td>131</td><td><input type="text" value="0" id="131" onchange="changed(131)"/></td><td id="m131">NOP</td>
</tr> <tr>
<td>132</td><td><input type="text" value="0" id="132" onchange="changed(132)"/></td><td id="m132">NOP</td>
</tr> <tr>
<td>133</td><td><input type="text" value="0" id="133" onchange="changed(133)"/></td><td id="m133">NOP</td>
</tr> <tr>
<td>134</td><td><input type="text" value="0" id="134" onchange="changed(134)"/></td><td id="m134">NOP</td>
</tr> <tr>
<td>135</td><td><input type="text" value="0" id="135" onchange="changed(135)"/></td><td id="m135">NOP</td>
</tr> <tr>
<td>136</td><td><input type="text" value="0" id="136" onchange="changed(136)"/></td><td id="m136">NOP</td>
</tr> <tr>
<td>137</td><td><input type="text" value="0" id="137" onchange="changed(137)"/></td><td id="m137">NOP</td>
</tr> <tr>
<td>138</td><td><input type="text" value="0" id="138" onchange="changed(138)"/></td><td id="m138">NOP</td>
</tr> <tr>
<td>139</td><td><input type="text" value="0" id="139" onchange="changed(139)"/></td><td id="m139">NOP</td>
</tr> <tr>
<td>140</td><td><input type="text" value="0" id="140" onchange="changed(140)"/></td><td id="m140">NOP</td>
</tr> <tr>
<td>141</td><td><input type="text" value="0" id="141" onchange="changed(141)"/></td><td id="m141">NOP</td>
</tr> <tr>
<td>142</td><td><input type="text" value="0" id="142" onchange="changed(142)"/></td><td id="m142">NOP</td>
</tr> <tr>
<td>143</td><td><input type="text" value="0" id="143" onchange="changed(143)"/></td><td id="m143">NOP</td>
</tr> <tr>
<td>144</td><td><input type="text" value="0" id="144" onchange="changed(144)"/></td><td id="m144">NOP</td>
</tr> <tr>
<td>145</td><td><input type="text" value="0" id="145" onchange="changed(145)"/></td><td id="m145">NOP</td>
</tr> <tr>
<td>146</td><td><input type="text" value="0" id="146" onchange="changed(146)"/></td><td id="m146">NOP</td>
</tr> <tr>
<td>147</td><td><input type="text" value="0" id="147" onchange="changed(147)"/></td><td id="m147">NOP</td>
</tr> <tr>
<td>148</td><td><input type="text" value="0" id="148" onchange="changed(148)"/></td><td id="m148">NOP</td>
</tr> <tr>
<td>149</td><td><input type="text" value="0" id="149" onchange="changed(149)"/></td><td id="m149">NOP</td>
</tr> <tr>
<td>150</td><td><input type="text" value="0" id="150" onchange="changed(150)"/></td><td id="m150">NOP</td>
</tr> <tr>
<td>151</td><td><input type="text" value="0" id="151" onchange="changed(151)"/></td><td id="m151">NOP</td>
</tr> <tr>
<td>152</td><td><input type="text" value="0" id="152" onchange="changed(152)"/></td><td id="m152">NOP</td>
</tr> <tr>
<td>153</td><td><input type="text" value="0" id="153" onchange="changed(153)"/></td><td id="m153">NOP</td>
</tr> <tr>
<td>154</td><td><input type="text" value="0" id="154" onchange="changed(154)"/></td><td id="m154">NOP</td>
</tr> <tr>
<td>155</td><td><input type="text" value="0" id="155" onchange="changed(155)"/></td><td id="m155">NOP</td>
</tr> <tr>
<td>156</td><td><input type="text" value="0" id="156" onchange="changed(156)"/></td><td id="m156">NOP</td>
</tr> <tr>
<td>157</td><td><input type="text" value="0" id="157" onchange="changed(157)"/></td><td id="m157">NOP</td>
</tr> <tr>
<td>158</td><td><input type="text" value="0" id="158" onchange="changed(158)"/></td><td id="m158">NOP</td>
</tr> <tr>
<td>159</td><td><input type="text" value="0" id="159" onchange="changed(159)"/></td><td id="m159">NOP</td>
</tr> <tr>
<td>160</td><td><input type="text" value="0" id="160" onchange="changed(160)"/></td><td id="m160">NOP</td>
</tr> <tr>
<td>161</td><td><input type="text" value="0" id="161" onchange="changed(161)"/></td><td id="m161">NOP</td>
</tr> <tr>
<td>162</td><td><input type="text" value="0" id="162" onchange="changed(162)"/></td><td id="m162">NOP</td>
</tr> <tr>
<td>163</td><td><input type="text" value="0" id="163" onchange="changed(163)"/></td><td id="m163">NOP</td>
</tr> <tr>
<td>164</td><td><input type="text" value="0" id="164" onchange="changed(164)"/></td><td id="m164">NOP</td>
</tr> <tr>
<td>165</td><td><input type="text" value="0" id="165" onchange="changed(165)"/></td><td id="m165">NOP</td>
</tr> <tr>
<td>166</td><td><input type="text" value="0" id="166" onchange="changed(166)"/></td><td id="m166">NOP</td>
</tr> <tr>
<td>167</td><td><input type="text" value="0" id="167" onchange="changed(167)"/></td><td id="m167">NOP</td>
</tr> <tr>
<td>168</td><td><input type="text" value="0" id="168" onchange="changed(168)"/></td><td id="m168">NOP</td>
</tr> <tr>
<td>169</td><td><input type="text" value="0" id="169" onchange="changed(169)"/></td><td id="m169">NOP</td>
</tr> <tr>
<td>170</td><td><input type="text" value="0" id="170" onchange="changed(170)"/></td><td id="m170">NOP</td>
</tr> <tr>
<td>171</td><td><input type="text" value="0" id="171" onchange="changed(171)"/></td><td id="m171">NOP</td>
</tr> <tr>
<td>172</td><td><input type="text" value="0" id="172" onchange="changed(172)"/></td><td id="m172">NOP</td>
</tr> <tr>
<td>173</td><td><input type="text" value="0" id="173" onchange="changed(173)"/></td><td id="m173">NOP</td>
</tr> <tr>
<td>174</td><td><input type="text" value="0" id="174" onchange="changed(174)"/></td><td id="m174">NOP</td>
</tr> <tr>
<td>175</td><td><input type="text" value="0" id="175" onchange="changed(175)"/></td><td id="m175">NOP</td>
</tr> <tr>
<td>176</td><td><input type="text" value="0" id="176" onchange="changed(176)"/></td><td id="m176">NOP</td>
</tr> <tr>
<td>177</td><td><input type="text" value="0" id="177" onchange="changed(177)"/></td><td id="m177">NOP</td>
</tr> <tr>
<td>178</td><td><input type="text" value="0" id="178" onchange="changed(178)"/></td><td id="m178">NOP</td>
</tr> <tr>
<td>179</td><td><input type="text" value="0" id="179" onchange="changed(179)"/></td><td id="m179">NOP</td>
</tr> <tr>
<td>180</td><td><input type="text" value="0" id="180" onchange="changed(180)"/></td><td id="m180">NOP</td>
</tr> <tr>
<td>181</td><td><input type="text" value="0" id="181" onchange="changed(181)"/></td><td id="m181">NOP</td>
</tr> <tr>
<td>182</td><td><input type="text" value="0" id="182" onchange="changed(182)"/></td><td id="m182">NOP</td>
</tr> <tr>
<td>183</td><td><input type="text" value="0" id="183" onchange="changed(183)"/></td><td id="m183">NOP</td>
</tr> <tr>
<td>184</td><td><input type="text" value="0" id="184" onchange="changed(184)"/></td><td id="m184">NOP</td>
</tr> <tr>
<td>185</td><td><input type="text" value="0" id="185" onchange="changed(185)"/></td><td id="m185">NOP</td>
</tr> <tr>
<td>186</td><td><input type="text" value="0" id="186" onchange="changed(186)"/></td><td id="m186">NOP</td>
</tr> <tr>
<td>187</td><td><input type="text" value="0" id="187" onchange="changed(187)"/></td><td id="m187">NOP</td>
</tr> <tr>
<td>188</td><td><input type="text" value="0" id="188" onchange="changed(188)"/></td><td id="m188">NOP</td>
</tr> <tr>
<td>189</td><td><input type="text" value="0" id="189" onchange="changed(189)"/></td><td id="m189">NOP</td>
</tr> <tr>
<td>190</td><td><input type="text" value="0" id="190" onchange="changed(190)"/></td><td id="m190">NOP</td>
</tr> <tr>
<td>191</td><td><input type="text" value="0" id="191" onchange="changed(191)"/></td><td id="m191">NOP</td>
</tr> <tr>
<td>192</td><td><input type="text" value="0" id="192" onchange="changed(192)"/></td><td id="m192">NOP</td>
</tr> <tr>
<td>193</td><td><input type="text" value="0" id="193" onchange="changed(193)"/></td><td id="m193">NOP</td>
</tr> <tr>
<td>194</td><td><input type="text" value="0" id="194" onchange="changed(194)"/></td><td id="m194">NOP</td>
</tr> <tr>
<td>195</td><td><input type="text" value="0" id="195" onchange="changed(195)"/></td><td id="m195">NOP</td>
</tr> <tr>
<td>196</td><td><input type="text" value="0" id="196" onchange="changed(196)"/></td><td id="m196">NOP</td>
</tr> <tr>
<td>197</td><td><input type="text" value="0" id="197" onchange="changed(197)"/></td><td id="m197">NOP</td>
</tr> <tr>
<td>198</td><td><input type="text" value="0" id="198" onchange="changed(198)"/></td><td id="m198">NOP</td>
</tr> <tr>
<td>199</td><td><input type="text" value="0" id="199" onchange="changed(199)"/></td><td id="m199">NOP</td>
</tr> <tr>
<td>200</td><td><input type="text" value="0" id="200" onchange="changed(200)"/></td><td id="m200">NOP</td>
</tr> <tr>
<td>201</td><td><input type="text" value="0" id="201" onchange="changed(201)"/></td><td id="m201">NOP</td>
</tr> <tr>
<td>202</td><td><input type="text" value="0" id="202" onchange="changed(202)"/></td><td id="m202">NOP</td>
</tr> <tr>
<td>203</td><td><input type="text" value="0" id="203" onchange="changed(203)"/></td><td id="m203">NOP</td>
</tr> <tr>
<td>204</td><td><input type="text" value="0" id="204" onchange="changed(204)"/></td><td id="m204">NOP</td>
</tr> <tr>
<td>205</td><td><input type="text" value="0" id="205" onchange="changed(205)"/></td><td id="m205">NOP</td>
</tr> <tr>
<td>206</td><td><input type="text" value="0" id="206" onchange="changed(206)"/></td><td id="m206">NOP</td>
</tr> <tr>
<td>207</td><td><input type="text" value="0" id="207" onchange="changed(207)"/></td><td id="m207">NOP</td>
</tr> <tr>
<td>208</td><td><input type="text" value="0" id="208" onchange="changed(208)"/></td><td id="m208">NOP</td>
</tr> <tr>
<td>209</td><td><input type="text" value="0" id="209" onchange="changed(209)"/></td><td id="m209">NOP</td>
</tr> <tr>
<td>210</td><td><input type="text" value="0" id="210" onchange="changed(210)"/></td><td id="m210">NOP</td>
</tr> <tr>
<td>211</td><td><input type="text" value="0" id="211" onchange="changed(211)"/></td><td id="m211">NOP</td>
</tr> <tr>
<td>212</td><td><input type="text" value="0" id="212" onchange="changed(212)"/></td><td id="m212">NOP</td>
</tr> <tr>
<td>213</td><td><input type="text" value="0" id="213" onchange="changed(213)"/></td><td id="m213">NOP</td>
</tr> <tr>
<td>214</td><td><input type="text" value="0" id="214" onchange="changed(214)"/></td><td id="m214">NOP</td>
</tr> <tr>
<td>215</td><td><input type="text" value="0" id="215" onchange="changed(215)"/></td><td id="m215">NOP</td>
</tr> <tr>
<td>216</td><td><input type="text" value="0" id="216" onchange="changed(216)"/></td><td id="m216">NOP</td>
</tr> <tr>
<td>217</td><td><input type="text" value="0" id="217" onchange="changed(217)"/></td><td id="m217">NOP</td>
</tr> <tr>
<td>218</td><td><input type="text" value="0" id="218" onchange="changed(218)"/></td><td id="m218">NOP</td>
</tr> <tr>
<td>219</td><td><input type="text" value="0" id="219" onchange="changed(219)"/></td><td id="m219">NOP</td>
</tr> <tr>
<td>220</td><td><input type="text" value="0" id="220" onchange="changed(220)"/></td><td id="m220">NOP</td>
</tr> <tr>
<td>221</td><td><input type="text" value="0" id="221" onchange="changed(221)"/></td><td id="m221">NOP</td>
</tr> <tr>
<td>222</td><td><input type="text" value="0" id="222" onchange="changed(222)"/></td><td id="m222">NOP</td>
</tr> <tr>
<td>223</td><td><input type="text" value="0" id="223" onchange="changed(223)"/></td><td id="m223">NOP</td>
</tr> <tr>
<td>224</td><td><input type="text" value="0" id="224" onchange="changed(224)"/></td><td id="m224">NOP</td>
</tr> <tr>
<td>225</td><td><input type="text" value="0" id="225" onchange="changed(225)"/></td><td id="m225">NOP</td>
</tr> <tr>
<td>226</td><td><input type="text" value="0" id="226" onchange="changed(226)"/></td><td id="m226">NOP</td>
</tr> <tr>
<td>227</td><td><input type="text" value="0" id="227" onchange="changed(227)"/></td><td id="m227">NOP</td>
</tr> <tr>
<td>228</td><td><input type="text" value="0" id="228" onchange="changed(228)"/></td><td id="m228">NOP</td>
</tr> <tr>
<td>229</td><td><input type="text" value="0" id="229" onchange="changed(229)"/></td><td id="m229">NOP</td>
</tr> <tr>
<td>230</td><td><input type="text" value="0" id="230" onchange="changed(230)"/></td><td id="m230">NOP</td>
</tr> <tr>
<td>231</td><td><input type="text" value="0" id="231" onchange="changed(231)"/></td><td id="m231">NOP</td>
</tr> <tr>
<td>232</td><td><input type="text" value="0" id="232" onchange="changed(232)"/></td><td id="m232">NOP</td>
</tr> <tr>
<td>233</td><td><input type="text" value="0" id="233" onchange="changed(233)"/></td><td id="m233">NOP</td>
</tr> <tr>
<td>234</td><td><input type="text" value="0" id="234" onchange="changed(234)"/></td><td id="m234">NOP</td>
</tr> <tr>
<td>235</td><td><input type="text" value="0" id="235" onchange="changed(235)"/></td><td id="m235">NOP</td>
</tr> <tr>
<td>236</td><td><input type="text" value="0" id="236" onchange="changed(236)"/></td><td id="m236">NOP</td>
</tr> <tr>
<td>237</td><td><input type="text" value="0" id="237" onchange="changed(237)"/></td><td id="m237">NOP</td>
</tr> <tr>
<td>238</td><td><input type="text" value="0" id="238" onchange="changed(238)"/></td><td id="m238">NOP</td>
</tr> <tr>
<td>239</td><td><input type="text" value="0" id="239" onchange="changed(239)"/></td><td id="m239">NOP</td>
</tr> <tr>
<td>240</td><td><input type="text" value="0" id="240" onchange="changed(240)"/></td><td id="m240">NOP</td>
</tr> <tr>
<td>241</td><td><input type="text" value="0" id="241" onchange="changed(241)"/></td><td id="m241">NOP</td>
</tr> <tr>
<td>242</td><td><input type="text" value="0" id="242" onchange="changed(242)"/></td><td id="m242">NOP</td>
</tr> <tr>
<td>243</td><td><input type="text" value="0" id="243" onchange="changed(243)"/></td><td id="m243">NOP</td>
</tr> <tr>
<td>244</td><td><input type="text" value="0" id="244" onchange="changed(244)"/></td><td id="m244">NOP</td>
</tr> <tr>
<td>245</td><td><input type="text" value="0" id="245" onchange="changed(245)"/></td><td id="m245">NOP</td>
</tr> <tr>
<td>246</td><td><input type="text" value="0" id="246" onchange="changed(246)"/></td><td id="m246">NOP</td>
</tr> <tr>
<td>247</td><td><input type="text" value="0" id="247" onchange="changed(247)"/></td><td id="m247">NOP</td>
</tr> <tr>
<td>248</td><td><input type="text" value="0" id="248" onchange="changed(248)"/></td><td id="m248">NOP</td>
</tr> <tr>
<td>249</td><td><input type="text" value="0" id="249" onchange="changed(249)"/></td><td id="m249">NOP</td>
</tr> <tr>
<td>250</td><td><input type="text" value="0" id="250" onchange="changed(250)"/></td><td id="m250">NOP</td>
</tr> <tr>
<td>251</td><td><input type="text" value="0" id="251" onchange="changed(251)"/></td><td id="m251">NOP</td>
</tr> <tr>
<td>252</td><td><input type="text" value="0" id="252" onchange="changed(252)"/></td><td id="m252">NOP</td>
</tr> <tr>
<td>253</td><td><input type="text" value="0" id="253" onchange="changed(253)"/></td><td id="m253">NOP</td>
</tr> <tr>
<td>254</td><td><input type="text" value="0" id="254" onchange="changed(254)"/></td><td id="m254">NOP</td>
</tr> <tr>
<td>255</td><td><input type="text" value="0" id="255" onchange="changed(255)"/></td><td id="m255">NOP</td>
</tr>
        </table>
    </div>
    <div style="float: right; width: 70%">
        <h3>Importar/Exportado</h3>
        <textarea style="width: 100%; height: 100vh" id="json"></textarea>
        </div>
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
    content = parseInt(content);
    let i = 0;
    let found = false;
    let is_data = false;
    if(parseInt(end) > 0){
        let before = document.getElementById("m"+(parseInt(end) - 1)).innerHTML;
        if(before == LDA || before == STA || before == JMP || before == JZ || before == JN
          || before == AND || before == OR || before == ADD){
              is_data = true;
          }
    }
    while(i < OPS.length && found == false && is_data == false){
        if(content == OPS[i].code){
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
        await sleep(1);
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
    let zt = 'false';
    let nt = 'false';
    document.getElementById("ac").innerHTML = ac;
    if(pc == 500){
        
    }else{
        document.getElementById("pc").innerHTML = pc;
    }
    if(z){
        zt = 'true';
    }
    if(n){
        nt = 'true';
    }
    document.getElementById("z").innerHTML = zt
    document.getElementById("n").innerHTML = nt
    document.getElementById("acessos").innerHTML = memory_fetches
    document.getElementById("instrucoes").innerHTML = instructions
}
function translate(data){
    let i = 0;
    while(i < OPS.length){
        if(data == OPS[i].code){
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



