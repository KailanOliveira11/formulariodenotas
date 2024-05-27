function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    const endereco = document.getElementById("endereco").value;
    const cep = document.getElementById("cep").value;
    const descricao = document.getElementById("descricao").value;
    const valor = document.getElementById("valor").value;
    const pagto = document.getElementById("pagto").value


    doc.setFontSize(16);
    doc.text("Nota Fiscal", 105, 20, null, null, 'center');

    doc.setFontSize(12);
    doc.text(`Nome Completo: ${nome}`, 20, 40);
    doc.text(`CPF: ${cpf}`, 20, 50);
    doc.text(`Tel: ${tel}`, 20, 60);
    doc.text(`E-mail: ${email}`, 20, 70);
    doc.text(`Endereço Completo: ${endereco}`, 20, 80);
    doc.text(`CEP: ${cep}`, 20, 90);
    doc.text(`Descrição do Produto: ${descricao}`, 20, 100);
    doc.text(`Valor Total da Nota: R$ ${valor}`, 20, 110);
    doc.text(`Forma de Pagamento: ${pagto}`, 20, 120);

    doc.save("nota_fiscal.pdf");
}