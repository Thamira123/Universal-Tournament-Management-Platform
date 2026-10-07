<script setup lang="ts">
</script>

<template>
  <div class="app-layout">
    <aside class="sidebar">
      <div class="logo">
        <span>UTMP</span>
      </div>

      <nav class="navigation">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/tournaments">Tournaments</RouterLink>
        <RouterLink to="/teams">Teams</RouterLink>
        <RouterLink to="/matches">Matches</RouterLink>
        <RouterLink to="/standings">Standings</RouterLink>
        <RouterLink to="/analytics">Analytics</RouterLink>
      </nav>
    </aside>

    <div class="main-area">
      <header class="topbar">
        <div>
          <h1>Universal Tournament Management Platform</h1>
          <p>Manage tournaments, teams, matches and standings</p>
        </div>
      </header>

      <main class="content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
}

.sidebar {
  width: 240px;
  min-height: 100vh;
  padding: 24px;
  border-right: 1px solid #e5e7eb;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
}

.navigation {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.navigation a {
  text-decoration: none;
  padding: 10px 12px;
}

.main-area {
  flex: 1;
}

.topbar {
  padding: 24px 32px;
  border-bottom: 1px solid #e5e7eb;
}

.topbar h1 {
  margin: 0;
  font-size: 24px;
}

.topbar p {
  margin: 6px 0 0;
}

.content {
  padding: 32px;
}
</style>
