<template>
  <!-- verif if text null ne pas mettre border -->
  <!--sinon mettre de meilleur border-->
  <div class="tw-bg-thirdly tw-flex tw-h-dvh tw-text-white tw-justify-center">
    <div class="tw-flex tw-flex-col tw-justify-center tw-bg-secondary tw-m-10 tw-my-40 tw-rounded-2.5xl tw-items-center tw-w-1/2">
      <div v-if="sended" class="tw-flex tw-flex-col tw-text-center tw-items-center tw-w-1/2">
        <p class="tw-text-2xl tw-font-medium">Votre mail à été envoyé ! <br> Je vous recontacterais par mail au plus vite !</p>
      </div>
      <div v-else class="tw-flex tw-flex-col tw-text-center tw-items-center tw-w-1/2">
        <p class="tw-text-2xl tw-font-medium">Intéressé par une collaboration ? <br> Nous devrions fixer une date pour discuter.</p>

        <form ref="form" @submit.prevent="sendEmail" class="tw-w-full">

          <!--<p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </p>-->

          <div class="tw-flex tw-w-full tw-justify-between tw-pt-5">
            <div class="tw-flex tw-flex-col tw-w-5/12">
              <input @input="checkName(name)" @change="changeName"
                     required
                     id="from_name"
                     v-model="name"
                     type="text"
                     name="from_name"
                     placeholder="Nom"
                     class="input tw-h-10 tw-border tw-border-solid tw-border-black tw-rounded-[5px] tw-text-black"
              >
              <p v-if="nameError" class="tw-pt-1 tw-text-red-500 text-weight-bold">Veuillez entrer votre nom !</p>
            </div>

            <div class="tw-flex tw-flex-col tw-w-5/12">
              <input @input="checkEmail(mail)" @change="changeEmail"
                     required
                     id="email_id"
                     v-model="mail"
                     type="email"
                     name="email_id"
                     placeholder="Email"
                     class="input tw-h-10 tw-border tw-border-solid tw-border-black tw-rounded-[5px] tw-text-black"
              >
              <p v-if="mailError" class="tw-pt-1 tw-text-red-500 text-weight-bold">Veuillez entrer une addresse email correct !</p>
            </div>
          </div>

          <textarea @input="checkMessage(message)" @change="changeMessage"
                    required
                    minlength="12"
                    id="message"
                    v-model="message"
                    type="text"
                    name="message"
                    placeholder="Message"
                    class="input tw-w-full tw-h-36 tw-mt-10 tw-resize-none tw-border tw-border-solid tw-border-black tw-rounded-[5px] tw-text-black"
          ></textarea>
          <p v-if="messageError" class="tw-pt-1 tw-text-red-500 text-weight-bold">Veuillez entrer votre message !</p>

          <q-btn :disable="disableBtn" type="sumbit" class="tw-h-10 tw-rounded-2.5xl tw-bg-primary tw-text-thirdly tw-w-full tw-mt-10">Send</q-btn>

        </form>
      </div>

      <div class="tw-mt-10">
        <div  class="tw-flex tw-justify-center tw-space-x-16 tw-items-center tw-mb-6 tw-px-96">
          <a href="https://github.com/DidiSmash" target="_blank">
            <q-btn flat round icon="fa-brands fa-github" color="white" class="tw-text-xl tw-bg-thirdly"/>
          </a>
          <a href="https://guns.lol/didismash" target="_blank">
            <q-btn flat round icon="fa-brands fa-discord" color="white" class="tw-text-xl tw-bg-thirdly"/>
          </a>
          <a href="https://www.linkedin.com/in/killian-tonione-92382829a/" target="_blank">
            <q-btn flat round icon="fa-brands fa-linkedin" color="white" class="tw-text-xl tw-bg-thirdly"/>
          </a>
        </div>

        <div class="tw-flex tw-justify-center tw-items-center tw-px-96">
          <p class="tw-text-sm">All Rights Reserved © 2024 - Killian Tonione</p>
        </div>
      </div>
    </div>

    <!--<div class="tw-flex tw-flex-col tw-justify-center tw-bg-black tw-bg-opacity-80 tw-m-10 tw-my-40 tw-rounded-2.5xl tw-items-center tw-w-1/2">
      <div v-if="sended" class="tw-flex tw-flex-col tw-text-center tw-items-center tw-w-1/2">
        <p class="tw-text-2xl tw-font-medium">Votre mail à été envoyé ! <br> Je vous recontacterais par mail au plus vite !</p>
      </div>
      <div v-else class="tw-flex tw-flex-col tw-text-center tw-items-center tw-w-1/2">
        <p class="tw-text-2xl tw-font-medium">Intéressé par une collaboration ? <br> Nous devrions fixer une date pour discuter.</p>

        <form ref="form" @submit.prevent="sendEmail" class="tw-w-full">

          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </p>

          <div class="tw-flex tw-w-full tw-justify-between tw-pt-5">
            <div class="tw-flex tw-flex-col tw-w-5/12">
              <input @input="checkName(name)" @change="changeName"
                     id="from_name"
                     v-model="name"
                     type="text"
                     name="from_name"
                     placeholder="Nom"
                     class="tw-h-10 tw-border tw-border-solid tw-border-black tw-rounded-[5px] tw-text-black"
              >
              <p v-if="nameError" class="tw-pt-1 tw-text-red-500 text-weight-bold">Veuillez entrer votre nom !</p>
            </div>

            <div class="tw-flex tw-flex-col tw-w-5/12">
              <input @input="checkEmail(mail)" @change="changeEmail"
                     id="email_id"
                     v-model="mail"
                     type="email"
                     name="email_id"
                     placeholder="Email"
                     class="tw-h-10 tw-border tw-border-solid tw-border-black tw-rounded-[5px] tw-text-black"
              >
              <p v-if="mailError" class="tw-pt-1 tw-text-red-500 text-weight-bold">Veuillez entrer une addresse email correct !</p>
            </div>
          </div>

          <textarea @input="checkMessage(message)" @change="changeMessage"
            id="message"
            v-model="message"
            type="text"
            name="message"
            placeholder="Message"
            class="tw-w-full tw-h-36 tw-mt-10 tw-resize-none tw-border tw-border-solid tw-border-black tw-rounded-[5px] tw-text-black"
          ></textarea>
          <p v-if="messageError" class="tw-pt-1 tw-text-red-500 text-weight-bold">Veuillez entrer votre message !</p>

          <q-btn :disable="disableBtn" type="sumbit" class="tw-h-10 tw-rounded-2.5xl tw-bg-blue-900 tw-w-full tw-mt-10">Send</q-btn>

        </form>
      </div>

      <div class="tw-mt-10">
        <div  class="tw-flex tw-justify-center tw-space-x-16 tw-items-center tw-mb-6 tw-px-96">
          <a href="https://github.com/DidiSmash" target="_blank">
            <q-btn flat round icon="fa-brands fa-github" color="white" class="tw-text-xl tw-bg-black"/>
          </a>
          <a href="https://guns.lol/didismash" target="_blank">
            <q-btn flat round icon="fa-brands fa-discord" color="white" class="tw-text-xl tw-bg-black"/>
          </a>
          <a href="https://www.linkedin.com/in/killian-tonione-92382829a/" target="_blank">
            <q-btn flat round icon="fa-brands fa-linkedin" color="white" class="tw-text-xl tw-bg-black"/>
          </a>
        </div>

        <div class="tw-flex tw-justify-center tw-items-center tw-px-96">
          <p class="tw-text-sm">All Rights Reserved © 2024 - Killian Tonione</p>
        </div>
      </div>
    </div>
    <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-1/2">
      <div class="redBox tw-w-1/2 tw-h-1/3 tw-bg-red-500 tw-rounded-2.5xl"></div>
    </div>-->
  </div>
</template>

<script setup>
import { ref, computed} from 'vue';
import emailjs from '@emailjs/browser';

const name = ref(null);
const mail = ref(null);
const message = ref(null);

const nameValidate = ref(false);
const mailValidate = ref(false);
const messageValidate = ref(false);

const nameError = ref(false);
const mailError = ref(false);
const messageError = ref(false);
const disableBtn = computed(() => !(nameValidate.value && mailValidate.value && messageValidate.value));
const sended = ref(false);

const checkName = (inputName) => {
  nameError.value = false;
  nameValidate.value = inputName.length > 0;
};

const changeName = () => {
  nameError.value = !nameValidate.value;
};

const checkEmail = (inputEmail) => {
  mailError.value = false;
  const re = /\S+@\S+\.\S+/;
  mailValidate.value = re.test(inputEmail);
};

const changeEmail = () => {
  mailError.value = !mailValidate.value;
};

const checkMessage = (inputMessage) => {
  messageError.value = false;
  messageValidate.value = inputMessage.length > 11;
};

const changeMessage = () => {
  messageError.value = !messageValidate.value;
};

const sendEmail = (formRef) => {
  emailjs
    .sendForm('service_gowrtpt', 'template_t7ghhci', formRef.value, {
      publicKey: '9AzLrF5z1bIqXM5xO',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        formRef.value.reset();
        sended.value = true;

        const redBox = document.querySelector('.redBox');
        if (redBox) {
          redBox.classList.remove('tw-bg-red-500');
          redBox.classList.add('tw-bg-blue-500');
        }
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
};
</script>


<style scoped>
.input {
  outline: 3px solid hsl(203, 30%, 26%);
}

.input:valid {
  outline-color: hsl(117, 58%, 51%);
}

.input:user-invalid {
  outline-color: hsl(0, 58%, 51%);
}

.input:focus:invalid {
  outline-color: hsl(41, 77%, 45%);
}
</style>
