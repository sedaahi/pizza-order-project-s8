describe("Pizza Sipariş Akışı - Anasayfa", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it('Anasayfadaki "ACIKTIM" butonu sipariş sayfasına doğru şekilde yönlendiriyor', () => {
    cy.get('[data-cy="hero-order-button"]')
      .should("be.visible")
      .should("contain", "ACIKTIM");

    cy.get('[data-cy="hero-order-button"]').click();

    cy.url().should("include", "/order");
  });
});

describe("Pizza Sipariş Sayfası Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("İsim inputuna metin girilebiliyor mu?", () => {
    cy.get('[data-cy="name-input"]')
      .type("Seda Ahi")
      .should("have.value", "Seda Ahi");
  });

  it("Birden fazla malzeme seçilebiliyor mu?", () => {
    cy.get('[data-cy="ingredient-checkbox"]')
      .check({ force: true }) // Hidden olduğu için force:true gerekli
      .should("be.checked");

    cy.get('[data-cy="ingredient-checkbox"]:checked').should(
      "have.length.at.least",
      4,
    );
  });

  it("İsim kısa olduğunda hata mesajı görünüyor mu?", () => {
    // Önce alanı temizle, sonra 2 harf yaz
    cy.get('[data-cy="name-input"]').clear().type("Se");

    cy.contains("İsim en az 3 karakter olmalı.").should("be.visible");

    // Butonun disabled olduğunu kontrol et
    // Not: Eğer sayfada iki tane submit-button varsa .first() ekleyerek hatayı çözebiliriz
    cy.get('[data-cy="submit-button"]').first().should("be.disabled");
  });

  it("Form eksiksiz doldurulduğunda sipariş verilebiliyor mu?", () => {
    cy.get('[data-cy="name-input"]').type("Seda Ahi");
    cy.get('input[name="size"]').check("M", { force: true });
    cy.get('select[name="dough"]').select("İnce Hamur");

    // 5 malzeme seç
    for (let i = 0; i < 5; i++) {
      cy.get('[data-cy="ingredient-checkbox"]').eq(i).check({ force: true });
    }

    // Butonun aktifleşmesini bekle ve tıkla
    cy.get('[data-cy="submit-button"]')
      .first()
      .should("not.be.disabled")
      .click({ force: true });

    // Başarı sayfasına gitmiş olmalı
    cy.url({ timeout: 10000 }).should("include", "/success");
  });

  it("API isteği başarılı olduğunda success sayfasına yönlendirip özet bilgileri gösteriyor mu?", () => {
    // API isteğini yakala 
    cy.intercept("POST", "https://reqres.in/api/pizza").as("postOrder");

    // 1. Formu doldur
    cy.get('[data-cy="name-input"]').type("Seda Ahi");
    cy.get('input[name="size"]').check("M", { force: true });
    cy.get('select[name="dough"]').select("İnce Hamur");

    // 5 Malzeme seç
    for (let i = 0; i < 5; i++) {
      cy.get('[data-cy="ingredient-checkbox"]').eq(i).check({ force: true });
    }

    cy.get('[data-cy="submit-button"]').first().click({ force: true });

    // 3. API cevabının gelmesini bekle
    cy.wait("@postOrder").its("response.statusCode").should("eq", 201); // Reqres genelde 201 döner

    cy.url().should("include", "/success");

    // 5. Başlıkları ve Özet Verileri Kontrol Et
    cy.contains("SİPARİŞ ALINDI").should("be.visible");
    cy.contains("Seda Ahi").should("be.visible");
    cy.contains("İnce Hamur").should("be.visible");

    // Sipariş toplamı alanını kontrol et (Örn: Toplam kelimesi geçiyor mu?)
    cy.contains("Sipariş Toplamı").should("be.visible");
  });

  it("Sipariş verisi olmadan Success sayfasına girilirse hata mesajı gösteriyor mu?", () => {
    // Doğrudan success sayfasına git (state'de veri olmayacak)
    cy.visit("http://localhost:5173/success");

    // 'SİPARİŞ BULUNAMADI' mesajını görmeliyiz
    cy.contains("SİPARİŞ BULUNAMADI").should("be.visible");
    cy.get("a")
      .contains("SİPARİŞ SAYFASINA DÖN")
      .should("have.attr", "href", "/order");
  });
});
