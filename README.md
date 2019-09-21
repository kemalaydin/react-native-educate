#React Native Eğitimleri

##Stil Komutları

```
/**
!! React Native içerisinde stil tanımlamaları styles (değiştirilebilir) değişkeni ile StyleSheet sınıfına ait create fonksiyonu kullanılarak js nesnesi üzerinden yapılır. Bu stil tanımlamaları nesnelerin style alanına '<Text style={styles.className}></Text>' şeklinde kullanılır.
**/

const styles = StyleSheet.create({
	className: {
		padding: 5,
		margin: 10
	}
}) 
```

**flex :** Temel amaç kolon veya sütun sayısı belirtmektir. Bir View içerisinde 2 nesne var ise bu nesnelerden Example1 flex değeri 1 ve Example2 flex değeri 2 ise bu bize 3 gridlik alan olduğunu bunun 2 tanesini Examaple2'nin kullandığını gösterir. Örnek : <code>flex: 2</code>

**flexDirection :** Nesnelerin dikey mi yatay mı yerleşeceğini gösterir. <code>'row'</code> ve <code>'column'</code> değerlerini alır. Varsayılan olarak *column* gelir. Örnek : <code>flexDirection: 'row'</code>

**justifyContent :** flexDirection ile yerleşme düzeni belirtilmiş nesnenin dikey yada yatay hizalanmasını gösterir. *row* ve *column* için farklı şekilde hizalama yapar. row için yatayda, column için ise dikeyde hizalama komutudur. Örnek değer: <code>justifyContent: 'center'</code> 

​	Alabileceği diğer değerler : <code>'flex-start'</code> ( Sola veya Üste yaslar ), <code>'flex-end'</code> ( Sağa veya Alta yaslar ), <code>'center'</code> ( Ortalar ), <code>'space-between'</code> ( Eşit aralıklarla tam kaplar ), <code>'space-around'</code> ( Eşit aralıklarla tam kaplar ve sağ ve soldan padding verir), 

**alignItems :** flexDirection ile yerleşme düzeni belirtilmiş nesnenin yatay yada dikey hizalamasını gösterir. row* ve *column* için farklı şekilde hizalama yapar. row için dikeyde, column için ise yatayda hizalama komutudur. Örnek : <code>alignItems: 'center'</code> 

​	Alabileceği diğer değerler : <code>'flex-start'</code> ( Sola veya Üste yaslar ), <code>'flex-end'</code> ( Sağa veya Alta yaslar ), <code>'center'</code> ( Ortalar ), <code>'stretch'</code> ( yükseklik yada genişlik belirtilmez ise otomatik verir ), <code>'space-around'</code> ( Eşit aralıklarla tam kaplar ve sağ ve soldan padding verir), 

## Genel

### Componentler

​	Tek bir ayar ile nesneler oluşturmak için kullanılırlar. Örneğin bir kart tasarımı yaptın, bu kartı aynı sayfada 5 farklı yerde kullanıyorsun veya yan yana 5 kart listeliyorsun. Her bir karta stil vs. tanımlamadan component haline getirip gerekli düzenlemeleri componentte yapıyoruz. Kullanmak istediğimizde çağırıp kullanıyoruz. Bir düzenleme yapmamız gerektiğinde tek tek yapmak yerine componenti düzenleyerek hepsini güncelleyebiliyoruz.

​	Anadizin üzerinden bir klasör oluşturarak componentleri burada depolamak daha sağlıklı olacaktır. Component oluşturmak için WebStorm üzerinde bulunan Live Template eklentisi ile <code>rnc</code> yazarak component kodlarını çekebilirsin. Componenti ana dosyaya dahil etmek için <code>import ComponentName from './dosya_yolu/ComponentName'</code> kodunu kullanacağım. Component'i sayfada kullanmak için <code><ComponentName /></code> kodunu kullanacağım. 

### Props

​	Component ayarlarıdır. Parametre <code> <Text name='demo' otherParameter='demo2' /> </code> şeklinde gönderilir. Component içinde ise render içerisinde <code>const {name,otherParameter}=this.props;</code> şeklinde alınır. parantez içindeki değişken ismi gönderilen parametre anahtarı ile aynı olmalıdır. Bu propslara bir validate uygulanabiliyor. Bunu yapmak için component içerisinde <code> import PropTypes from 'prop-type'</code> ekleniyor. Ardından dosya içerisinde ;

```javascript
ComponentName.propTypes = {
  propName: PropTypes.string.isRequired
}
```

şekliden eklenmesi gerekmekte. 

### Events

​	Eventsler bir nesne üzerinde yapılan işlem sonucu atılacak adımlar için kullanılır. Örneğin bir butona tıkladığında ne yapması gerektiğini <code> onPress = {this.functionName} </code> ile verebiliriz.  Daha sonra <code>functionName</code> fonksiyonunu component içerisinde <code> functionName = () => { işlemler };</code> şeklinde kullanarak işlemler yaptırabiliyoruz.


### State Kavramı
    
​    
​ 

