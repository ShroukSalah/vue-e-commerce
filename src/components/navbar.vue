<template>
    <div>
        <q-toolbar class="tw-bg-black text-white q-mb-md shadow-2 tw-container tw-mx-auto lg:tw-px-24">
            <q-space />
            <router-link to="/">
                <q-btn stretch flat label="Home" />
            </router-link>
            <q-separator dark vertical />
            <router-link to="/login">
                <q-btn stretch flat label="Login" />
            </router-link>

        </q-toolbar>
    </div>
</template>