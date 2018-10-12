<template>
	<div class="login-form">
		<div class="g-form">
			<div class="g-form-line">
				<span class="g-form-label">用户名：</span>
				<div class="g-form-input">
					<input type="text" placeholder="请输入用户名" v-model="username">
				</div>
				<span class="g-form-error">{{userErrors.errorText}}</span>
			</div>
			<div class="g-form-line">
				<span class="g-form-label">密码：</span>
				<div class="g-form-input">
					<input type="password" placeholder="请输入密码" v-model="password">
				</div>
				<span class="g-form-error">{{passwordErrors.errorText}}</span>
			</div>
			<div class="g-form-line">
				<div class="g-form-btn" @click="onLogin">
					<a class="button">登录</a>
				</div>
				<span class="g-form-error">{{errorText}}</span>
			</div>
			<p></p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			password: "",
			errorText: ""
		};
	},
	computed: {
		userErrors() {
			let errorText, status;

			!/@/g.test(this.username)
				? ((errorText = "请输入合法的邮箱地址"), (status = false))
				: ((errorText = ""), (status = true));

			return {
				errorText: errorText,
				status: status
			};
		},
		passwordErrors() {
			let errorText, status;

			!/^\w{1,6}$/g.test(this.password)
				? ((errorText = "请输入1-6位长度的密码"), (status = false))
				: ((errorText = ""), (status = true));

			return {
				errorText: errorText,
				status: status
			};
		}
	},
	methods: {
		onLogin() {
			!this.userErrors.status || !this.passwordErrors.status
				? (this.errorText = "请正确填写信息")
				: ((this.errorText = ""), alert("登陆成功"));
		}
	}
};
</script>

<style scoped>
.g-form-line {
	padding: 15px 0;
}
.g-form-label {
	width: 100px;
	font-size: 16px;
	display: inline-block;
}
.g-form-input {
	display: inline-block;
}
.g-form-input input {
	height: 30px;
	width: 200px;
	line-height: 30px;
	vertical-align: middle;
	padding: 0 10px;
	border: 1px solid #ccc;
}
.g-form-btn {
	padding-left: 100px;
}
.g-form-error {
	color: red;
	padding-left: 15px;
}
</style>

