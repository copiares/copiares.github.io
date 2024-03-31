


// script funcoes 

    //Gerador QRCode
        async function genQR() {
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value;
    var mysize = document.getElementById("size").value;

    if (mytext !== "" && mysize == "100") {
        myimg.src = gapi + "100x100" + "&chl=" + mytext;
        // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
    } else if (mytext !== "" && mysize == "150") {
        myimg.src = gapi + "150x150" + "&chl=" + mytext;
    } else if (mytext !== "" && mysize == "200") {
        myimg.src = gapi + "200x200" + "&chl=" + mytext;
    } else if (mytext !== "" && mysize == "250") {
        myimg.src = gapi + "250x250" + "&chl=" + mytext;
    } else if (mytext !== "" && mysize == "300") {
        myimg.src = gapi + "300x300" + "&chl=" + mytext;
    } else {
        alert("Please Enter Text");
    }
}

   
    //Gerador de Curriculo em PDF
    function generateResumePDF() {
        var doc = new jsPDF();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var city = document.getElementById('city').value;
        var state = document.getElementById('state').value;
        var postalCode = document.getElementById('postalCode').value;
        var summary = document.getElementById('summary').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var imageFile = document.getElementById('image').files[0];

        var content = `
            <h2>Currículo de ${name}</h2>
            <table>
                <tr>
                    <td><strong>Email:</strong></td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td><strong>Telefone:</strong></td>
                    <td>${phone}</td>
                </tr>
                <tr>
                    <td><strong>Endereço:</strong></td>
                    <td>${address}, ${city}, ${state}, ${postalCode}</td>
                </tr>
            </table>
            <h3>Resumo Profissional:</h3>
            <p>${summary}</p>
            <h3>Educação:</h3>
            <p>${education}</p>
            <h3>Experiência Profissional:</h3>
            <p>${experience}</p>
            <h3>Habilidades:</h3>
            <p>${skills}</p>
        `;

        if (imageFile) {
            var reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onload = function () {
                doc.addImage(reader.result, 'JPEG', 10, 140, 50, 50); // Posição e tamanho da imagem
                doc.fromHTML(content, 70, 10); // Posição do conteúdo
                doc.save('curriculo.pdf');
            };
        } else {
            doc.fromHTML(content, 10, 10);
            doc.save('curriculo.pdf');
        }
    }
    
    // JavaScript code for the URL Shortener
function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;
    var resultDiv = document.getElementById("result");
    var copyButton = document.getElementById("copyButton");

    // Clear previous results
    resultDiv.innerHTML = "";
    copyButton.style.display = "none";

    // Send AJAX request using Axios to Bitly API
    axios.post("https://api-ssl.bitly.com/v4/shorten", {
            long_url: originalUrl
        }, {
            headers: {
                Authorization: "Bearer bd662592007dc32a81f324c398598d7f410403c7",
                "Content-Type": "application/json"
            }
        })
        .then(function(response) {
            var shortUrl = response.data.link;
            resultDiv.innerHTML = "<p><strong>URL Encurtada:</strong> <a href='" + shortUrl + "' target='_blank'>" + shortUrl + "</a></p>";
            copyButton.style.display = "block";
            copyButton.dataset.url = shortUrl;
        })
        .catch(function(error) {
            console.error(error);
            resultDiv.innerHTML = "<p style='color: red;'>Ocorreu um erro ao encurtar a URL.</p>";
        });
}

function copyUrl() {
    var url = document.getElementById("copyButton").dataset.url;
    var tempInput = document.createElement("input");
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("URL copiada para a área de transferência!");
}
 
 // Gerador de senha    
  function generatePassword() {
    const passwordLength = document.getElementById("passwordLength").value;
    const password = generateRandomPassword(passwordLength);
    const passwordOutput = document.getElementById("passwordOutput").querySelector("span");
    passwordOutput.textContent = password;
}

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
} 
    
 //Gerador link Whatsapp
function generateWhatsAppLink() {
    const phoneNumber = document.getElementById("phoneNumber").value;
    const message = encodeURIComponent(document.getElementById("message").value);
    let whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber;
    if (message) {
        whatsappLink += "&text=" + message;
    }
    const whatsappLinkOutput = document.getElementById("whatsappLinkOutput").querySelector("span");
    whatsappLinkOutput.innerHTML = "<a href='" + whatsappLink + "' target='_blank'>" + whatsappLink + "</a>";
}
    
 //Parse HTML para XML blogger 
 function convertToXml() {
    const htmlContent = document.getElementById("htmlInput").value;

    // Convert HTML to XML format compatible with Blogger
    let xmlContent = '';

    const bodyContent = htmlContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    xmlContent += bodyContent;

    document.getElementById("xmlTextarea").value = xmlContent;
}

    
    // Reading Time Calculator
  
function calculateReadingTime() {
    const text = document.getElementById('readingTimeInput').value;
    const wordsPerMinute = 200; // Average case.
    let result = '';
    if (text.length > 0) {
        const words = text.trim().split(/\s+/).length;
        console.log("words", words)
        const timeToRead = words / wordsPerMinute;
        result = `${Math.ceil(timeToRead)} minutes`;
    } else {
        result = '0 minutes';
    }
    document.getElementById('readingTimeOutput').querySelector('span').textContent = result;
}

// Random Word Generator
function generateRandomWord() {
    const words = [
    "laranja", "pêssego", "pêra", "abacaxi", "caqui", "goiaba", "ameixa", "ameixa seca", "maracujá", "abacate", 
    "acerola", "tangerina", "mamão", "framboesa", "mirtilo", "amora", "carambola", "pitaya", "manga", "jabuticaba",
    "jazz", "quip", "fizz", "buzz", "fuzzy", "jinx", "jukebox", "confusão", "zigzag", "zéfiro", "pixel", "valsa",
    "mágico", "quiosque", "oxigênio", "vodka", "whisky", "jackpot", "quebra-cabeça", "jóquei", "quartzo", "questionário",
    "aperto", "zíper", "zodíaco", "zigoto", "iate", "iaque", "gema", "iogurte", "yoga", "bocejo", "fio", "xilofone",
    "xebec", "raio-X", "xenônio", "xerox", "xanadu", "magia", "wombat", "morsa", "valsa", "onda", "ondulado", "cera",
    "encerado", "fio", "escrito", "escrever", "errado", "escreveu", "forjado", "yoga", "iogue", "jugo", "gema", "tempo",
    "jovem", "juventude", "uivo", "yuan", "yucca", "eca", "nojento", "Natal", "yum", "gostoso", "sim", "yuppy", "zigue-zague",
    "zapear", "entusiasmo", "zebra", "zen", "zero", "zeste", "zig", "zinco", "zip", "espinha", "zoo", "zoom", "louco", "zapear",
    "entusiasmo", "zebra", "zen", "zero", "zeste", "zigue-zague", "zinco", "zip", "zíper", "espinha", "zona", "zoo", "zoom",
    "bumerangue", "blitz", "palavra da moda", "biquíni", "nevasca", "blitz", "bangalô", "abutre", "seguro", "segurança", 
    "política", "reserva", "sinistro", "garantia", "cartão de crédito", "fatura", "pagamento", "crédito", "débito", "empréstimo",
    "limite", "compra", "saldo", "recompensas", "zumbido", "palavras da moda", "califa", "teia de aranha", "arrogância", "croquet",
    "cripta", "ciclo", "daiquiri", "dirndl", "desavow", "duplex", "anões", "equipar", "espionagem", "êxodo", "fingimento",
    "anzol de pesca", "reparável", "fiorde", "panqueca", "palpitar", "frouxidão", "voar", "gloxínia", "embriagado", "frisado",
    "tagarela", "galáxia", "galvanizar", "gazebo", "giaour", "gizmo", "vaga-lume", "glifo", "estragado", "gnóstico", "fofoca",
    "sonolência", "haicai", "aleatório", "hífen", "iatrogênico", "caixa de gelo", "lesão", "marfim", "hera", "jackpot", "icterícia",
    "bala de goma", "atravessar fora da faixa", "mais jazz", "animado", "geléia", "quebra-cabeça", "má sorte", "jiu-jitsu", "jóquei",
    "corrida", "brincadeira", "jovial", "alegre", "suco", "jukebox", "jumbo", "caiaque", "kazoo", "fechadura", "caqui", "quilobyte",
    "quiosque", "kitsch", "kiwi", "desajeitado", "mochila", "laringe", "comprimentos", "sortudo", "luxo", "linfa", "marquês",
    "matriz", "megahertz", "micro-ondas", "mnemônico", "misterificar", "nafta", "clube noturno", "hoje em dia", "colega", "artes",
    "ônix", "avião", "oxidar", "oxigênio", "pijama", "brincadeira de esconde-esconde", "fleuma", "pixel", "pizzazz", "pneumonia",
    "polca", "show", "psique", "filhote de cachorro", "puzzling", "quartzo", "fila", "piadas", "quixotesco", "questionário",
    "questionários", "quórum", "razzmatazz", "ruibarbo", "ritmo", "rickshaw", "snaps", "arranhar", "shiv", "elegante", "esfinge",
    "spritz", "gritar", "pessoal", "força", "forças", "esticar", "fortaleza", "frustrado", "metrô", "girar", "síndrome",
    "sem-vontade", "parafuso de polegar", "topázio", "transcrição", "transgredir", "transplante", "trifongo", "décimo segundo",
    "décimos segundos", "desconhecido", "indigno", "descompactar", "bairro nobre", "vaporizar", "raposa", "vodka", "vodu",
    "vórtice", "vovô", "calçadão", "valsa", "onda", "ondulado", "encerado", "manancial", "chiado", "uísque", "zumbindo",
    "quem", "fraco", "bruxaria", "mágico", "tonto", "relógio de pulso", "copiar", "xilofone", "iatismo", "yippee", "jugo",
    "jovem", "gostoso", "zéfiro", "zigzag", "copy", "nada", "zíper", "zodíaco", "zumbi", "Stripe", "SpaceX", "Instacart",
    "Epic Games", "DoorDash", "Rivian", "Coupang", "Klarna", "Robinhood", "Coinbase", "Canva", "Grab", "Databricks", "UiPath",
    "Chime", "Plaid", "Ripple", "Ola Cabs", "Wish", "Instacart", "JUUL Labs", "Airbnb", "Bytedance", "Lyft", "Didi Chuxing",
    "Palantir Technologies", "Snowflake", "One97 Communications", "Celonis", "Roblox", "Nubank", "UiPath", "Klarna", "Epic Games",
    "Opendoor", "DoorDash", "ThoughtSpot", "Wish", "SpaceX", "Affirm", "Toast", "Rappi", "Rivian", "Snowflake", "Celonis",
    "Checkout.com", "Discord", "Razorpay", "Bitmain", "Credit Karma", "Duolingo", "Udaan", "Zomato", "ReNew Power", "Databricks",
    "Pine Labs", "Ola Cabs", "DJI", "Klarna", "Revolut", "Nubank", "Chime", "Lalamove", "Coupang", "Canva", "Grab", "Go-Jek",
    "Wish", "SpaceX", "UiPath", "DoorDash", "Robinhood", "Plaid", "Coinbase", "Stripe", "Opendoor", "Bytedance", "Roblox",
    "forex", "forex fx", "trader", "trading"
];

    const randomIndex = Math.floor(Math.random() * words.length);
    document.getElementById('randomWordOutput').querySelector('span').textContent = words[randomIndex];
}

// Text to Binary/Binary to Text
function convertTextBinary() {
    const input = document.getElementById('textBinaryInput').value;
    let output = '';
    if (input.match(/^[01\s]+$/)) {
        // Input is binary, convert to text
        output = input.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
    } else {
        // Input is text, convert to binary
        output = input.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
    }
    document.getElementById('textBinaryOutput').querySelector('span').textContent = output;
}

// Text to Slug
function convertToSlug() {
    const input = document.getElementById('slugInput').value;
    const slug = input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    document.getElementById('slugOutput').querySelector('span').textContent = slug;
}

// Lorem Ipsum Generator
function generateLoremIpsum() {
    const paragraphs = parseInt(document.getElementById('loremParagraphs').value) || 1;
    const wordsCount = parseInt(document.getElementById('loremWords').value) || 50;
    const loremIpsumText = 'Lorem ipsum dolor sit amet, Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.';
    const loremWords = loremIpsumText.split(' ');

    let output = '';
    for (let i = 0; i < paragraphs; i++) {
        let paragraph = '';
        for (let w = 0; w < wordsCount; w++) {
            paragraph += loremWords[w % loremWords.length] + ' ';
        }
        output += `<p>${paragraph.trim()}</p>`;
    }
    document.getElementById('loremOutput').innerHTML = output;
}

// HTML Encoder/Decoder
function encodeDecodeHTML() {
    const textArea = document.createElement('textarea');
    const input = document.getElementById('htmlInput').value;
    let output = '';
    if (input.indexOf('&') === -1) {
        // Input is not HTML encoded
        textArea.textContent = input;
        output = textArea.innerHTML;
    } else {
        // Input is HTML encoded
        textArea.innerHTML = input;
        output = textArea.textContent;
    }
    document.getElementById('htmlOutput').querySelector('span').textContent = output;
}

// RGB to HEX Converter
function convertRgbToHex() {
    const rgbInput = document.getElementById('rgbInput').value;
    const rgbArray = rgbInput.split(',').map(num => parseInt(num.trim()));
    if (rgbArray.length === 3 && rgbArray.every(num => num >= 0 && num <= 255)) {
        const hex = '#' + rgbArray.map(num => num.toString(16).padStart(2, '0')).join('').toUpperCase();
        document.getElementById('hexOutput').textContent = hex;
        document.getElementById('colorPicker').value = hex;
    } else {
        document.getElementById('hexOutput').textContent = 'Invalid RGB Value';
    }
}

// HEX to RGB Converter
function convertHexToRgb() {
    const hexInput = document.getElementById('hexInput').value;
    const isValidHex = /^#?([0-9A-Fa-f]{3}){1,2}$/.test(hexInput);
    if (isValidHex) {
        let hex = hexInput.replace(/^#/, '');
        if (hex.length === 3) {
            hex = Array.from(hex).map(h => h + h).join('');
        }
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        const rgb = `RGB: ${r}, ${g}, ${b}`;
        document.getElementById('rgbOutput').textContent = rgb;
        document.getElementById('colorPicker').value = '#' + hex;
    } else {
        document.getElementById('rgbOutput').textContent = 'Invalid HEX Value';
    }
}

// Update Color Inputs and Box when Color Picker changes
function updateColorInputs() {
    const color = document.getElementById('colorPicker').value;
    document.getElementById('rgbInput').value = hexToRgb(color);
    document.getElementById('hexInput').value = color;
}

// Convert HEX to RGB String
function hexToRgb(hex) {
    const bigint = parseInt(hex.replace(/^#/, ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}

// URL Encoder & URL Decoder
function encodeDecodeURL() {
    const input = document.getElementById('urlInput').value;
    try {
        if (input === encodeURIComponent(decodeURIComponent(input))) {
            // Input is not URL encoded, encode it
            document.getElementById('urlOutput').querySelector('span').textContent = encodeURIComponent(input);
        } else {
            // Input is URL encoded, decode it
            document.getElementById('urlOutput').querySelector('span').textContent = decodeURIComponent(input);
        }
    } catch (e) {
        // Input is not a valid URL encoding
        document.getElementById('urlOutput').querySelector('span').textContent = 'Invalid input for URL decoding';
    }
}
    
    // Contagem de caracteres
    const textArea = document.getElementById('textArea');
        const charCountSpan = document.getElementById('charCount');
        const wordCountSpan = document.getElementById('wordCount');
        const lineCountSpan = document.getElementById('lineCount');

        textArea.addEventListener('input', () => {
            const text = textArea.value;

            // Contagem de caracteres
            charCountSpan.textContent = text.length;

            // Contagem de palavras
            const words = text.match(/\w+/g) || [];
            wordCountSpan.textContent = words.length;

            // Contagem de linhas
            const lines = text.split('\n').filter(line => line.trim() !== '');
            lineCountSpan.textContent = lines.length;
        });
    
    
     // Calculadora
    function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result = 'Divisão por zero não é permitida';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Operador inválido';
    }

    document.getElementById('calculatorOutput').querySelector('span').textContent = result;
} 
    
     // Gerador de assinatura
     function generateSignature() {
        var name = document.getElementById("name").value;
        var jobTitle = document.getElementById("jobTitle").value;
        var company = document.getElementById("company").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var website = document.getElementById("website").value;
        var linkedin = document.getElementById("linkedin").value;
        var twitter = document.getElementById("twitter").value;

        var signature = `${name}\n${jobTitle ? jobTitle + " at " : ""}${company}\n${email ? "E-mail: " + email + "\n" : ""}${phone ? "Phone: " + phone + "\n" : ""}${website ? "Website: " + website + "\n" : ""}${linkedin ? "LinkedIn: " + linkedin + "\n" : ""}${twitter ? "Twitter: " + twitter : ""}`;

        document.getElementById("signature").value = signature;
    }

    function copySignature() {
        var signature = document.getElementById("signature");
        signature.select();
        document.execCommand("copy");
    }
 
    // Função para gerar uma data aleatória
  function generateRandomDate() {
    const startDate = new Date(1970, 0, 1); // Data de início (1 de janeiro de 1970)
    const endDate = new Date(); // Data de hoje
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return randomDate.toISOString().slice(0, 10); // Formato ISO (YYYY-MM-DD)
  }

  // Atualizar o parágrafo com a data gerada
  function updateRandomDate() {
    const randomDatePara = document.getElementById('randomDate');
    randomDatePara.textContent = generateRandomDate();
  }

  // Copiar o resultado para a área de transferência
  function copyResult() {
    const randomDatePara = document.getElementById('randomDate');
    const textToCopy = randomDatePara.textContent;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Data copiada para a área de transferência!');
      })
      .catch(err => {
        console.error('Erro ao copiar: ', err);
      });
  }
    
    
    // Calculadora IMC
    function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var resultElement = document.getElementById("result");

    if (height <= 0 || weight <= 0) {
        resultElement.innerHTML = "Por favor, insira valores válidos para altura e peso.";
        return;
    }

    var bmi = weight / (height * height);
    var bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = "Abaixo do peso";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Peso normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Sobrepeso";
    } else {
        bmiCategory = "Obesidade";
    }

    resultElement.innerHTML = "Seu IMC é: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
}
    
  
    
  //  Convert IMAGES
     const pngToJpgButton = document.getElementById("png-to-jpg-button");
    const jpgToPngButton = document.getElementById("jpg-to-png-button");
    const pngFileInput = document.getElementById("png-file-input");
    const jpgFileInput = document.getElementById("jpg-file-input");

    pngToJpgButton.addEventListener("click", function () {
        convertFile(pngFileInput.files[0], "image/jpeg");
    });
    jpgToPngButton.addEventListener("click", function () {
        convertFile(jpgFileInput.files[0], "image/png");
    });

    function convertFile(file, type) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            let image = new Image();
            image.src = reader.result;
            image.onload = function () {
                let canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                let ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0);
                let newImage = canvas.toDataURL(type);
                downloadImage(newImage, `converted_image.${type.split("/")[1]}`);
            };
        };
    }

    function downloadImage(data, fileName) {
        let a = document.createElement("a");
        a.href = data;
        a.download = fileName;
        a.click();
    }
    
  // Youtube download Thumbnails
   function downloadThumbnails() {
        const videoUrl = document.getElementById('videoUrl').value;
        const videoId = getVideoId(videoUrl);
        const thumbnailUrls = [
            { url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, size: '1280x720' },
            { url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`, size: '480x360' },
            { url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`, size: '640x480' },
            { url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`, size: '320x180' },
            { url: `https://img.youtube.com/vi/${videoId}/default.jpg`, size: '120x90' }
        ];

        const thumbnailsContainer = document.getElementById('thumbnails');
        thumbnailsContainer.innerHTML = '';

        thumbnailUrls.forEach(thumbnail => {
            const thumbnailWrapper = document.createElement('div');
            thumbnailWrapper.className = 'thumbnail-wrapper';

            const img = document.createElement('img');
            img.src = thumbnail.url;
            img.className = 'thumbnail';

            const sizeLabel = document.createElement('p');
            sizeLabel.textContent = thumbnail.size;

            thumbnailWrapper.appendChild(sizeLabel);
            thumbnailWrapper.appendChild(img);
            thumbnailsContainer.appendChild(thumbnailWrapper);
        });
    }

    function getVideoId(url) {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regExp);
        return match && match[1];
    }
   

// Função para definir um cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Função para obter um cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Verifica se os cookies já foram aceitos
if (getCookie('cookiesAccepted')) {
    document.getElementById('cookie-container').style.display = 'none';
}

// Adiciona um evento de clique ao botão de aceitar cookies
document.getElementById('accept-cookies-button').addEventListener('click', function() {
    setCookie('cookiesAccepted', true, 7); // Define o cookie por 7 dias
    document.getElementById('cookie-container').style.display = 'none';
});
