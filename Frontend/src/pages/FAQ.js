import React from 'react';

export default function FAQ() {
  return (
    <main>
      <div class="container-fluid py-3 mt-5 pt-5 pb-5">
        <div class="row">
          <div class="col-10 mx-auto">
            <div class="accordion" id="faqExample">
              <div class="card">
                <div class="card-header p-2" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne">
                      Q: What is Softwarezoid?
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#faqExample">
                  <div class="card-body">
                    Softwarezoid is a platform, which sells software at a fair price to buyers from all over the world.
                    We cut all the hassle of searching through different websites and sellers to get the best price - we
                    did it for you! Through this innovative platform you'll never have to use any other site to get
                    exactly what you need.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-2" id="headingTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo">
                      Q: Do I need an account to order a product?
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#faqExample">
                  <div class="card-body">No, we don't require you to make an account on our site.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-2" id="headingThree">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree">
                      Q. How will I receive my ordered product?
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#faqExample">
                  <div class="card-body">
                    You will receive an email containing the product key. Once you have received the you will have to
                    follow the product makers instruction, on how to redeem your product.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-2" id="headingFour">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour">
                      Q. When will I receive my product key?
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#faqExample">
                  <div class="card-body">
                    You will receive your product within 30 minutes. However, we would like to ask for patience when
                    ordering in busy seasons such as holidays and the 20th of April.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-2" id="headingFive">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive">
                      Q. Are there any guarantees that I will receive a working product?
                    </button>
                  </h5>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#faqExample">
                  <div class="card-body">
                    We are guaranteeing 100% satisfaction. You will receive a working product key, you'll just have to
                    follow the instructions which the product maker made for the specific product.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-2" id="headingSix">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix">
                      Q. I received a faulty product. What do I do?
                    </button>
                  </h5>
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#faqExample">
                  <div class="card-body">
                    If you received a product that you're having a problem activating. Please contact our customer
                    support and we'll get back to you as soon as possible!
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-2" id="headingSeven">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven">
                      Q. What payment methods are accepted?
                    </button>
                  </h5>
                </div>
                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#faqExample">
                  <div class="card-body">
                    We accept both Paypal and credit card. As of this moment we don't accept any cryptocurrency.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-2" id="headingEight">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight">
                      Q. What payment methods are accepted?
                    </button>
                  </h5>
                </div>
                <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#faqExample">
                  <div class="card-body">
                    We accept both Paypal and credit card. As of this moment we don't accept any cryptocurrency.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
