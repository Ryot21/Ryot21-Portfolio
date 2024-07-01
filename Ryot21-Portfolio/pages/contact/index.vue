<!-- お問い合わせページ -->
<script setup lang="ts">

	import { useForm } from 'vee-validate'
	import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'

	const config = useRuntimeConfig()

	const schema = {
		subject (value: string) {return value ? true : 'Subject is required'},
		name    (value: string) {return value ? true : 'Name is required'},
		email   (value: string) {return value ? true : 'Email is required'},
		message (value: string) {return value ? true : 'Message is required'}
	}

	const { defineField, handleSubmit, errors } = useForm({
		validationSchema: schema
	})

	const [subject, subjectProps] = defineField('subject')
	const [name, nameProps] = defineField('name')
	const [email, emailProps] = defineField('email')
	const [message, messageProps] = defineField('message')

	const { vueApp } = useNuxtApp()

	vueApp.use(VueReCaptcha, {
		siteKey: config.public.newt.recaptchaSiteKey,
		loaderOptions: {
			renderParameters: {
				hl: 'ja'
			}
		}
	})

	const recaptchaInstance = useReCaptcha()

	const onSubmit = handleSubmit(async (values) => {
		await recaptchaInstance?.recaptchaLoaded()
		const token = await recaptchaInstance?.executeRecaptcha('submit')
		values.googleReCaptchaToken = token

		const formData = new FormData()
		Object.entries(values).forEach(([key, value]) => {
			formData.append(key, value)
		})

		// await fetch(config.public.newt.formEndpoint, {
		// 	method: 'POST',
		// 	body: formData,
		// 	headers: {
		// 		Accept: 'application/json'
		// 	}
		// })
		try {
			const response = await fetch(config.public.newt.formEndpoint, {
				method: 'POST',
				body: formData,
				headers: {
					Accept: 'application/json'
				}
			})

			if (response.ok) {
				await navigateTo('/contact/thanks')
			} else {
				await navigateTo('/contact/error')
			}
		} catch (err) {
			await navigateTo('/contact/error')
		}
	})

	useHead({
		title: "お問い合わせページ | Ryot21-Portfolio",
		meta: [
			{ name: 'description', content: '埼玉県狭山市在住のWEBエンジニア「RYOTA MAEDA」のお問い合わせページです。様々なWEBサイト制作のご依頼・お仕事紹介のご依頼お待ちしております！' }
		]
	})


</script>

<template>

		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100 mgb20 mgb20s">
				<!-- パンくず -->
				<PartsBreadcrumb />

				<!-- ページ説明 -->
				<div class="c-profile mgb5 mgb10s">
					<ruby class="s-S -ls-2 -left">お問い合わせ</ruby>
					<h2 class="c-profile__title s-3L -b -ls-2 -left">CONTACT</h2>
				</div>
				<p class="c-profile__des s-M -left -lh-2 -ls-2 mgb10 mgb20s">
					埼玉県狭山市在住のWEBエンジニア「RYOTA MAEDA」です。<br class="tb-pc">
					様々なWEBサイト制作のご依頼・お仕事紹介のご依頼・お問い合わせをお待ちしております！
				</p>


				<!-- お問い合わせフォーム -->
				<form @submit="onSubmit">
				<!-- <form :action="config.public.newt.formEndpoint" method="post"> -->
					<dl class="mgb3 mgb5s">
						<dd class="mgb1 mgb2s"><label class="required s-L -left -ws-n -ls-2" for="subject">件名</label></dd>
						<dt>
							<input id="subject" class="-ls-2" v-model="subject" v-bind="subjectProps" name="subject" type="text"  placeholder="WEB制作の依頼" required>
							<!-- エラ〜 -->
							<p v-if="errors.subject" id="error-subject-required" class="s-SS -left -red" aria-live="assertive">
								{{ errors.subject }}
							</p>
						</dt>
					</dl>
					<dl class="mgb3 mgb5s">
						<dd class="mgb1 mgb2s"><label class="required s-L -left -ws-n -ls-2" for="name">お名前</label></dd>
						<dt>
							<input id="name" class="-ls-2" v-model="name" v-bind="nameProps" name="name" type="text"  placeholder="狭山　太郎" required>
							<!-- エラ〜 -->
							<p v-if="errors.name" id="error-name-required" class="s-SS -left -red" aria-live="assertive">
								{{ errors.name }}
							</p>
						</dt>
					</dl>
					<dl class="mgb3 mgb5s">
						<dd class="mgb1 mgb2s"><label class="required s-L -left -ws-n -ls-2" for="email">メールアドレス</label></dd>
						<dt>
							<input id="email" class="-ls-2" v-model="email" v-bind="emailProps" name="email" type="email" placeholder="xxx@gmail.com" required>
							<!-- エラ〜 -->
							<p v-if="errors.email" id="error-email-required" class="s-SS -left -red" aria-live="assertive">
								{{ errors.email }}
							</p>
						</dt>
					</dl>
					<dl class="mgb10 mgb10s">
						<dd class="mgb1 mgb2s"><label class="required s-L -left -ws-n -ls-2" for="message">お問い合わせ内容</label></dd>
						<dt>
							<textarea id="message" class="-ls-2" v-model="message" v-bind="messageProps" name="message" />
							<!-- <input id="message" v-model="message" v-bind="messageProps" name="message" placeholder="お問い合わせ内容を入力してください。" required> -->
							<!-- エラ〜 -->
							<p v-if="errors.message" id="error-message-required" class="s-SS -left -red" aria-live="assertive">
								{{ errors.message }}
							</p>
						</dt>
					</dl>
					<div class="c-btn -pageLink">
						<button type="submit" class="s-M -center -ls-2">送信</button>
					</div>
				</form>

			</div>
		</div>

</template>

<style lang="scss">
	.grecaptcha-badge { visibility: hidden; }
</style>