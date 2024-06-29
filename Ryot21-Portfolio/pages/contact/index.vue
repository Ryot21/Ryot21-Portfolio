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

	const t = "お問い合わせ"
	const sTE = "CONTACT"
	const sTJ = "WEBサイト制作依頼 + お仕事のご紹介"
	const des = "埼玉県狭山市在住のWEBエンジニア「RYOTA MAEDA」です。様々なWEBサイト制作のご依頼・お仕事紹介のご依頼・お問い合わせをお待ちしております！"

</script>

<template>

		<div class="c-contents mgt-contents">
			<div class="c-contents__inner w1100">
				<!-- ページ説明 -->
				<PageView :title="t" :sTE="sTE" :sTJ="sTJ" :des="des"/>

				<!-- お問い合わせフォーム -->
				<form @submit="onSubmit">
				<!-- <form :action="config.public.newt.formEndpoint" method="post"> -->
					<dl class="mgb3 mgb3s">
						<dd><label class="s-L -left" for="subject">件名：</label></dd>
						<dt>
							<input id="subject" v-model="subject" v-bind="subjectProps" name="subject" type="text"  placeholder="件名" required>
							<!-- エラ〜 -->
							<span v-if="errors.subject" id="error-subject-required" aria-live="assertive">
								{{ errors.subject }}
							</span>
						</dt>
					</dl>
					<dl class="mgb3 mgb3s">
						<dd><label class="s-L -left" for="name">お名前：</label></dd>
						<dt>
							<input id="name" v-model="name" v-bind="nameProps" name="name" type="text"  placeholder="お名前" required>
							<!-- エラ〜 -->
							<span v-if="errors.name" id="error-name-required" aria-live="assertive">
								{{ errors.name }}
							</span>
						</dt>
					</dl>
					<dl class="mgb3 mgb3s">
						<dd><label class="s-L -left" for="email">メールアドレス：</label></dd>
						<dt>
							<input id="email" v-model="email" v-bind="emailProps" name="email" type="email" placeholder="メールアドレス" required>
							<!-- エラ〜 -->
							<span v-if="errors.email" id="error-email-required" aria-live="assertive">
								{{ errors.email }}
							</span>
						</dt>
					</dl>
					<dl class="mgb3 mgb3s">
						<dd><label class="s-L -left" for="message">お問い合わせ内容：</label></dd>
						<dt>
							<input id="message" v-model="message" v-bind="messageProps" name="message" placeholder="お問い合わせ内容を入力してください。" required>
							<!-- エラ〜 -->
							<span v-if="errors.message" id="error-message-required" aria-live="assertive">
								{{ errors.message }}
							</span>
						</dt>
					</dl>
					<button type="submit">送信</button>
				</form>

			</div>
		</div>

</template>