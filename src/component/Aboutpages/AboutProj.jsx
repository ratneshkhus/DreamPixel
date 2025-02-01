import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'

export default function AboutProj() {
  useEffect(() => {
    document.title = "About this Project";
  }, []);
  return (
    <>
      <Navbar />
      <div className="aboutproj" >

        <h3>Purpose of This Project </h3>
        <p>1. Learning & Experimentation – The initial phase involved exploring AI models, understanding their capabilities, and implementing them effectively. This included testing different models and selecting the best fit for our use case.</p>
        <p>2. UI/UX Design & Frontend Development – A significant focus was placed on designing an intuitive and visually appealing user interface. This involved creating an interactive, smooth, and user-friendly experience to make image generation and enhancement accessible to everyone.</p>
        <p>3. Implementation & Model Integration – The Anthienlong / Flux_Image_Enhancer model was integrated to provide high-quality image. This required API handling, optimizing response times, and ensuring a seamless user experience.</p>
        <p>4. Testing & Optimization – Multiple rounds of testing were conducted to refine the application, improve performance, and eliminate bugs. This included responsiveness testing, user feedback analysis, and UI improvements.</p>
        <hr />
        <h3>Notice on AI Model Usage</h3>
        I utilize the Anthienlong / Flux_Image_Enhancer model, which is based on Flux1.dev . While Flux1.dev operates under a licensed framework, the licensing details for Anthienlong / Flux_Image_Enhancer remain unclear or unspecified.

        I have chosen this model. As responsible users of AI technology, I rely on Hugging Face latforms while ensuring compliance with best practices. If any licensing details emerge, I are committed to addressing them accordingly.

        This model is used solely for improving user experience, and I do not claim ownership or modification rights over the underlying AI.
        <hr />
        <h3> Modifiactions? </h3>
        <p>no Modifiactions have been done with model</p>
        <hr />

        <h3 id='License' >Flux1.dev license || notice</h3>

        <h4>https://huggingface.co/black-forest-labs/FLUX.1-dev/resolve/main/LICENSE.md</h4>
        <p>FLUX.1 [dev] Non-Commercial License

          Black Forest Labs, Inc. (“we” or “our” or “Company”) is pleased to make available the weights, parameters and inference code for the FLUX.1 [dev] Model (as defined below) freely available for your non-commercial and non-production use as set forth in this FLUX.1 [dev] Non-Commercial License (“License”). The “FLUX.1 [dev] Model” means the FLUX.1 [dev] text-to-image AI model and its elements which includes algorithms, software, checkpoints, parameters, source code (inference code, evaluation code, and if applicable, fine-tuning code) and any other materials associated with the FLUX.1 [dev] AI model made available by Company under this License, including if any, the technical documentation, manuals and instructions for the use and operation thereof (collectively, “FLUX.1 [dev] Model”).

          By downloading, accessing, use, Distributing (as defined below), or creating a Derivative (as defined below) of the FLUX.1 [dev] Model, you agree to the terms of this License. If you do not agree to this License, then you do not have any rights to access, use, Distribute or create a Derivative of the FLUX.1 [dev] Model and you must immediately cease using the FLUX.1 [dev] Model. If you are agreeing to be bound by the terms of this License on behalf of your employer or other entity, you represent and warrant to us that you have full legal authority to bind your employer or such entity to this License. If you do not have the requisite authority, you may not accept the License or access the FLUX.1 [dev] Model on behalf of your employer or other entity.

          Definitions. Capitalized terms used in this License but not defined herein have the following meanings:

          “Derivative” means any (i) modified version of the FLUX.1 [dev] Model (including but not limited to any customized or fine-tuned version thereof), (ii) work based on the FLUX.1 [dev] Model, or (iii) any other derivative work thereof. For the avoidance of doubt, Outputs are not considered Derivatives under this License.

          “Distribution” or “Distribute” or “Distributing” means providing or making available, by any means, a copy of the FLUX.1 [dev] Models and/or the Derivatives as the case may be.

          “Non-Commercial Purpose” means any of the following uses, but only so far as you do not receive any direct or indirect payment arising from the use of the model or its output: (i) personal use for research, experiment, and testing for the benefit of public knowledge, personal study, private entertainment, hobby projects, or otherwise not directly or indirectly connected to any commercial activities, business operations, or employment responsibilities; (ii) use by commercial or for-profit entities for testing, evaluation, or non-commercial research and development in a non-production environment, (iii) use by any charitable organization for charitable purposes, or for testing or evaluation. For clarity, use for revenue-generating activity or direct interactions with or impacts on end users, or use to train, fine tune or distill other models for commercial use is not a Non-Commercial purpose.

          “Outputs” means any content generated by the operation of the FLUX.1 [dev] Models or the Derivatives from a prompt (i.e., text instructions) provided by users. For the avoidance of doubt, Outputs do not include any components of a FLUX.1 [dev] Models, such as any fine-tuned versions of the FLUX.1 [dev] Models, the weights, or parameters.

          “you” or “your” means the individual or entity entering into this License with Company.

          License Grant.

          License. Subject to your compliance with this License, Company grants you a non-exclusive, worldwide, non-transferable, non-sublicensable, revocable, royalty free and limited license to access, use, create Derivatives of, and Distribute the FLUX.1 [dev] Models solely for your Non-Commercial Purposes. The foregoing license is personal to you, and you may not assign or sublicense this License or any other rights or obligations under this License without Company’s prior written consent; any such assignment or sublicense will be void and will automatically and immediately terminate this License. Any restrictions set forth herein in regarding the FLUX.1 [dev] Model also applies to any Derivative you create or that are created on your behalf.

          Non-Commercial Use Only. You may only access, use, Distribute, or creative Derivatives of or the FLUX.1 [dev] Model or Derivatives for Non-Commercial Purposes. If You want to use a FLUX.1 [dev] Model a Derivative for any purpose that is not expressly authorized under this License, such as for a commercial activity, you must request a license from Company, which Company may grant to you in Company’s sole discretion and which additional use may be subject to a fee, royalty or other revenue share. Please contact Company at the following e-mail address if you want to discuss such a license: info@blackforestlabs.ai.

          Reserved Rights. The grant of rights expressly set forth in this License are the complete grant of rights to you in the FLUX.1 [dev] Model, and no other licenses are granted, whether by waiver, estoppel, implication, equity or otherwise. Company and its licensors reserve all rights not expressly granted by this License.

          Outputs. We claim no ownership rights in and to the Outputs. You are solely responsible for the Outputs you generate and their subsequent uses in accordance with this License. You may use Output for any purpose (including for commercial purposes), except as expressly prohibited herein. You may not use the Output to train, fine-tune or distill a model that is competitive with the FLUX.1 [dev] Model.

          Distribution. Subject to this License, you may Distribute copies of the FLUX.1 [dev] Model and/or Derivatives made by you, under the following conditions:

          you must make available a copy of this License to third-party recipients of the FLUX.1 [dev] Models and/or Derivatives you Distribute, and specify that any rights to use the FLUX.1 [dev] Models and/or Derivatives shall be directly granted by Company to said third-party recipients pursuant to this License;

          you must make prominently display the following notice alongside the Distribution of the FLUX.1 [dev] Model or Derivative (such as via a “Notice” text file distributed as part of such FLUX.1 [dev] Model or Derivative) (the “Attribution Notice”):

          “The FLUX.1 [dev] Model is licensed by Black Forest Labs. Inc. under the FLUX.1 [dev] Non-Commercial License. Copyright Black Forest Labs. Inc.

          IN NO EVENT SHALL BLACK FOREST LABS, INC. BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH USE OF THIS MODEL.”

          in the case of Distribution of Derivatives made by you, you must also include in the Attribution Notice a statement that you have modified the applicable FLUX.1 [dev] Model; and

          in the case of Distribution of Derivatives made by you, any terms and conditions you impose on any third-party recipients relating to Derivatives made by or for you shall neither limit such third-party recipients’ use of the FLUX.1 [dev] Model or any Derivatives made by or for Company in accordance with this License nor conflict with any of its terms and conditions.

          In the case of Distribution of Derivatives made by you, you must not misrepresent or imply, through any means, that the Derivatives made by or for you and/or any modified version of the FLUX.1 [dev] Model you Distribute under your name and responsibility is an official product of the Company or has been endorsed, approved or validated by the Company, unless you are authorized by Company to do so in writing.

          Restrictions. You will not, and will not permit, assist or cause any third party to

          use, modify, copy, reproduce, create Derivatives of, or Distribute the FLUX.1 [dev] Model (or any Derivative thereof, or any data produced by the FLUX.1 [dev] Model), in whole or in part, for (i) any commercial or production purposes, (ii) military purposes, (iii) purposes of surveillance, including any research or development relating to surveillance, (iv) biometric processing, (v) in any manner that infringes, misappropriates, or otherwise violates any third-party rights, or (vi) in any manner that violates any applicable law and violating any privacy or security laws, rules, regulations, directives, or governmental requirements (including the General Data Privacy Regulation (Regulation (EU) 2016/679), the California Consumer Privacy Act, and any and all laws governing the processing of biometric information), as well as all amendments and successor laws to any of the foregoing;

          alter or remove copyright and other proprietary notices which appear on or in any portion of the FLUX.1 [dev] Model;

          utilize any equipment, device, software, or other means to circumvent or remove any security or protection used by Company in connection with the FLUX.1 [dev] Model, or to circumvent or remove any usage restrictions, or to enable functionality disabled by FLUX.1 [dev] Model; or

          offer or impose any terms on the FLUX.1 [dev] Model that alter, restrict, or are inconsistent with the terms of this License.

          violate any applicable U.S. and non-U.S. export control and trade sanctions laws (“Export Laws”) in connection with your use or Distribution of any FLUX.1 [dev] Model;

          directly or indirectly Distribute, export, or otherwise transfer FLUX.1 [dev] Model (a) to any individual, entity, or country prohibited by Export Laws; (b) to anyone on U.S. or non-U.S. government restricted parties lists; or (c) for any purpose prohibited by Export Laws, including nuclear, chemical or biological weapons, or missile technology applications; 3) use or download FLUX.1 [dev] Model if you or they are (a) located in a comprehensively sanctioned jurisdiction, (b) currently listed on any U.S. or non-U.S. restricted parties list, or (c) for any purpose prohibited by Export Laws; and (4) will not disguise your location through IP proxying or other methods.

          DISCLAIMERS. THE FLUX.1 [dev] MODEL IS PROVIDED “AS IS” AND “WITH ALL FAULTS” WITH NO WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. COMPANY EXPRESSLY DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS OR IMPLIED, WHETHER BY STATUTE, CUSTOM, USAGE OR OTHERWISE AS TO ANY MATTERS RELATED TO THE FLUX.1 [dev] MODEL, INCLUDING BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, SATISFACTORY QUALITY, OR NON-INFRINGEMENT. COMPANY MAKES NO WARRANTIES OR REPRESENTATIONS THAT THE FLUX.1 [dev] MODEL WILL BE ERROR FREE OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR PRODUCE ANY PARTICULAR RESULTS.

          LIMITATION OF LIABILITY. TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL COMPANY BE LIABLE TO YOU OR YOUR EMPLOYEES, AFFILIATES, USERS, OFFICERS OR DIRECTORS (A) UNDER ANY THEORY OF LIABILITY, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, WARRANTY, OR OTHERWISE UNDER THIS LICENSE, OR (B) FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, PUNITIVE OR SPECIAL DAMAGES OR LOST PROFITS, EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FLUX.1 [dev] MODEL, ITS CONSTITUENT COMPONENTS, AND ANY OUTPUT (COLLECTIVELY, “MODEL MATERIALS”) ARE NOT DESIGNED OR INTENDED FOR USE IN ANY APPLICATION OR SITUATION WHERE FAILURE OR FAULT OF THE MODEL MATERIALS COULD REASONABLY BE ANTICIPATED TO LEAD TO SERIOUS INJURY OF ANY PERSON, INCLUDING POTENTIAL DISCRIMINATION OR VIOLATION OF AN INDIVIDUAL’S PRIVACY RIGHTS, OR TO SEVERE PHYSICAL, PROPERTY, OR ENVIRONMENTAL DAMAGE (EACH, A “HIGH-RISK USE”). IF YOU ELECT TO USE ANY OF THE MODEL MATERIALS FOR A HIGH-RISK USE, YOU DO SO AT YOUR OWN RISK. YOU AGREE TO DESIGN AND IMPLEMENT APPROPRIATE DECISION-MAKING AND RISK-MITIGATION PROCEDURES AND POLICIES IN CONNECTION WITH A HIGH-RISK USE SUCH THAT EVEN IF THERE IS A FAILURE OR FAULT IN ANY OF THE MODEL MATERIALS, THE SAFETY OF PERSONS OR PROPERTY AFFECTED BY THE ACTIVITY STAYS AT A LEVEL THAT IS REASONABLE, APPROPRIATE, AND LAWFUL FOR THE FIELD OF THE HIGH-RISK USE.

          INDEMNIFICATION

          You will indemnify, defend and hold harmless Company and our subsidiaries and affiliates, and each of our respective shareholders, directors, officers, employees, agents, successors, and assigns (collectively, the “Company Parties”) from and against any losses, liabilities, damages, fines, penalties, and expenses (including reasonable attorneys’ fees) incurred by any Company Party in connection with any claim, demand, allegation, lawsuit, proceeding, or investigation (collectively, “Claims”) arising out of or related to (a) your access to or use of the FLUX.1 [dev] Model (as well as any Output, results or data generated from such access or use), including any High-Risk Use (defined below); (b) your violation of this License; or (c) your violation, misappropriation or infringement of any rights of another (including intellectual property or other proprietary rights and privacy rights). You will promptly notify the Company Parties of any such Claims, and cooperate with Company Parties in defending such Claims. You will also grant the Company Parties sole control of the defense or settlement, at Company’s sole option, of any Claims. This indemnity is in addition to, and not in lieu of, any other indemnities or remedies set forth in a written agreement between you and Company or the other Company Parties.

          Termination; Survival.

          This License will automatically terminate upon any breach by you of the terms of this License.

          We may terminate this License, in whole or in part, at any time upon notice (including electronic) to you.

          If You initiate any legal action or proceedings against Company or any other entity (including a cross-claim or counterclaim in a lawsuit), alleging that the FLUX.1 [dev] Model or any Derivative, or any part thereof, infringe upon intellectual property or other rights owned or licensable by you, then any licenses granted to you under this License will immediately terminate as of the date such legal action or claim is filed or initiated.

          Upon termination of this License, you must cease all use, access or Distribution of the FLUX.1 [dev] Model and any Derivatives. The following sections survive termination of this License 2(c), 2(d), 4-11.

          Third Party Materials. The FLUX.1 [dev] Model may contain third-party software or other components (including free and open source software) (all of the foregoing, “Third Party Materials”), which are subject to the license terms of the respective third-party licensors. Your dealings or correspondence with third parties and your use of or interaction with any Third Party Materials are solely between you and the third party. Company does not control or endorse, and makes no representations or warranties regarding, any Third Party Materials, and your access to and use of such Third Party Materials are at your own risk.

          Trademarks. You have not been granted any trademark license as part of this License and may not use any name or mark associated with Company without the prior written permission of Company, except to the extent necessary to make the reference required in the Attribution Notice as specified above or as is reasonably necessary in describing the FLUX.1 [dev] Model and its creators.

          General. This License will be governed and construed under the laws of the State of Delaware without regard to conflicts of law provisions. If any provision or part of a provision of this License is unlawful, void or unenforceable, that provision or part of the provision is deemed severed from this License, and will not affect the validity and enforceability of any remaining provisions. The failure of Company to exercise or enforce any right or provision of this License will not operate as a waiver of such right or provision. This License does not confer any third-party beneficiary rights upon any other person or entity. This License, together with the Documentation, contains the entire understanding between you and Company regarding the subject matter of this License, and supersedes all other written or oral agreements and understandings between you and Company regarding such subject matter. No change or addition to any provision of this License will be binding unless it is in writing and signed by an authorized representative of both you and Company.</p>
      </div>
     
    </>
  )
}
