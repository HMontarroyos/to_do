<a name="readme-top"></a>


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br>

  <a href="#To-Do-Mobile">To-Do Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Tecnologias-Utilizadas">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-Instalar-o-Projeto">Como Instalar o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Deploy-da-aplicação">Deploy da aplicação</a>


<br>

## <strong>To-Do Mobile</strong>

<br>

#### <strong>Mobile</strong>

<br>


<img width="300" alt="introduction" src="https://github.com/HMontarroyos/to_do/assets/60220406/438f4814-3fc5-4193-b7a1-199b2c966d78">
<br>
<img width="300" alt="mobile home task empty" src="https://github.com/HMontarroyos/to_do/assets/60220406/a20103e9-417c-405d-9127-f893117b569f">
<br>
<img width="300" alt="mobile home task" src="https://github.com/HMontarroyos/to_do/assets/60220406/fd55a79c-5334-40fa-903b-9f960e7eeb49">


<br>
<br>
<br>
Essa aplicação consiste em um To-Do feito para o mobile, você consegue criar uma task e após isso pode marcar ela como resolvida ou excluí-la ao acabar a mesma.
De forma totalmente intuitiva, tendo ainda uma página de introdução que explica como criar cada detalhe, elá também consiste em um switch onde é possível alterar entre o tema Dark Mode ou Light Mode na aplicação, facilitando para o gosto de cada usuário. 

<br/>

<p align="right">(<a href="#readme-top">de volta ao topo</a>)</p>


### <strong>Tecnologias Utilizadas</strong>

<br>

  [![React Native][React Native]][React_Native-url]
  [![Typescript][Typescript]][Typescript-url]
  [![Styled_Components][Styled_Components]][Styled_Components-url]
  [![Lottie_React_Native][Lottie_React_Native]][Lottie_React_Native-url]
  [![React_Navigation][React_Navigation]][React_Navigation-url]



<br>

### <strong>Utilitários</strong>

<br>

  [![Expo][Expo]][Expo-url]


<p align="right">(<a href="#readme-top">de volta ao topo</a>)</p>


### <strong>Como Instalar o Projeto</strong>
<br>

```sh
npm install
```
Após baixar todas as Dependências do Projeto dentro da pasta Raiz, inicie o Projeto através do Expo CLI  com o Comando: 

```sh
npx expo start
```


### <strong>Como usar</strong> 
<br>

Para Inicializar o Projeto tenha o Aplicativo do Expo instalado <a href="https://expo.dev/" target="_blank">Expo</a> é utilize seu QR Code para ler o que está no seu editor. 

<br>

### <strong>Deploy da aplicação</strong> 
<br>

Para efetuar o Deploy via Expo e ter seu APK para testar em mãos para a plataforma Android você irá fazer o seguinte.

Primeiro certifique de ter EAS (Expo Application Services) instalado na sua maquina, para isso rode o seguinte comando. 

```sh
npm install -g eas-cli
```
após isso faça o login assim como no expo 

```sh
eas login
```

Depois rode o seguinte comando já conectado a sua conta expo 

```sh
eas build -p android --profile preview
```
Esse comando irá criar o build em apk, graças a configuração de teste do preview no arquivo <i>eas.json</i> na pasta raiz.

Lembrando que isso é so para teste, caso for por na play store o indicado e seguir sem a flag de cima e gerar um build em ABB que é muito mais performatico que o APK para a Play store com o seguinte comando. 

```sh
eas build -p android
```

Para IOS é quase a mesma coisa mas precisa de um MAC para rodar o comando e buildar para a App Store. 

```sh
eas build -p ios
```
Eu vou deixar aqui o link do meu APK para android atualizado até o momento com todas as funcionalidades que se encontra nesse repositorio.

 <a href="https://drive.google.com/file/d/16uNOXyLjpI_8bNrRxbQPg77EUdqP6P6l/view?usp=sharing" target="_blank">Link para o APK no Driver</a>


<br>


### 🚀 Let's code! 🚀 ###


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/HMontarroyos/to_do.svg?style=for-the-badge
[contributors-url]: https://github.com/HMontarroyos/to_do/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/HMontarroyos/to_do.svg?style=for-the-badge
[forks-url]: https://github.com/HMontarroyos/to_do_list/fork
[stars-shield]: https://img.shields.io/github/stars/HMontarroyos/to_do.svg?style=for-the-badge
[stars-url]: https://github.com/HMontarroyos/to_do_list/stargazers
[issues-shield]: https://img.shields.io/github/issues/HMontarroyos/to_do.svg?style=for-the-badge
[issues-url]: https://github.com/HMontarroyos/to_do/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hebertmontarroyos-developer/


[React Native]: https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React_Native-url]: https://reactnative.dev/
[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Styled_Components]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[Styled_Components-url]: https://styled-components.com/
[Lottie_React_Native]: https://img.shields.io/badge/Lottie%20React%20Native-%23013243.svg?style=for-the-badge
[Lottie_React_Native-url]: https://github.com/lottie-react-native/lottie-react-native#readme

[React_Navigation]: https://img.shields.io/badge/React%20Navigation-%23150458.svg?style=for-the-badge
[React_Navigation-url]: https://reactnavigation.org/





[Expo]: https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37
[Expo-url]: https://expo.dev/
