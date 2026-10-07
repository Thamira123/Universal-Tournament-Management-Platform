<template>
  <div class="dashboard">
    <!-- Page Header -->
    <div class="page-header">
      <div>
        <h2>Dashboard</h2>
        <p>Welcome back! Here's what's happening with your tournaments.</p>
      </div>

      <button class="create-btn">
        + Create Tournament
      </button>
    </div>

    <!-- Statistics -->
    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-label">Tournaments</span>
        <h3>12</h3>
        <p>Active tournaments</p>
      </div>

      <div class="stat-card">
        <span class="stat-label">Teams</span>
        <h3>48</h3>
        <p>Registered teams</p>
      </div>

      <div class="stat-card">
        <span class="stat-label">Matches</span>
        <h3>156</h3>
        <p>Total matches</p>
      </div>

      <div class="stat-card">
        <span class="stat-label">Players</span>
        <h3>320</h3>
        <p>Registered players</p>
      </div>
    </div>

    <!-- Main Grid -->
    <div class="content-grid">
      <!-- Upcoming Matches -->
      <section class="card">
        <div class="card-header">
          <div>
            <h3>Upcoming Matches</h3>
            <p>Next scheduled matches</p>
          </div>
          <button class="view-btn">View All</button>
        </div>

        <div class="match-item">
          <div>
            <strong>University Warriors</strong>
            <span>vs</span>
            <strong>Campus Lions</strong>
          </div>
          <div class="match-time">
            <strong>Today</strong>
            <span>6:00 PM</span>
          </div>
        </div>

        <div class="match-item">
          <div>
            <strong>Royal Eagles</strong>
            <span>vs</span>
            <strong>Tech Titans</strong>
          </div>
          <div class="match-time">
            <strong>Tomorrow</strong>
            <span>4:30 PM</span>
          </div>
        </div>

        <div class="match-item">
          <div>
            <strong>Blue Sharks</strong>
            <span>vs</span>
            <strong>Red Dragons</strong>
          </div>
          <div class="match-time">
            <strong>Oct 10</strong>
            <span>7:00 PM</span>
          </div>
        </div>
      </section>

      <!-- Quick Actions -->
      <section class="card">
        <div class="card-header">
          <div>
            <h3>Quick Actions</h3>
            <p>Common tasks</p>
          </div>
        </div>

        <div class="actions">
          <button class="action-btn">
            <span>🏆</span>
            <div>
              <strong>Create Tournament</strong>
              <small>Start a new tournament</small>
            </div>
          </button>

          <button class="action-btn">
            <span>👥</span>
            <div>
              <strong>Add Team</strong>
              <small>Register a new team</small>
            </div>
          </button>

          <button class="action-btn">
            <span>⚽</span>
            <div>
              <strong>Schedule Match</strong>
              <small>Create a new match</small>
            </div>
          </button>
        </div>
      </section>
    </div>

    <!-- Recent Tournaments -->
    <section class="card recent-card">
      <div class="card-header">
        <div>
          <h3>Recent Tournaments</h3>
          <p>Recently created tournaments</p>
        </div>
        <button class="view-btn">View All</button>
      </div>

      <div class="tournament-list">
        <div class="tournament-row">
          <div>
            <strong>University Football Championship</strong>
            <span>Football • 16 Teams</span>
          </div>
          <span class="status active">Active</span>
        </div>

        <div class="tournament-row">
          <div>
            <strong>Inter Faculty Cricket Tournament</strong>
            <span>Cricket • 12 Teams</span>
          </div>
          <span class="status upcoming">Upcoming</span>
        </div>

        <div class="tournament-row">
          <div>
            <strong>Campus Basketball League</strong>
            <span>Basketball • 8 Teams</span>
          </div>
          <span class="status completed">Completed</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.page-header h2 {
  margin: 0;
  font-size: 30px;
  color: #111827;
}

.page-header p {
  margin: 6px 0 0;
  color: #6b7280;
}

.create-btn {
  border: none;
  background: #2563eb;
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.create-btn:hover {
  background: #1d4ed8;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

.stat-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 22px;
}

.stat-label {
  color: #6b7280;
  font-size: 14px;
}

.stat-card h3 {
  margin: 10px 0 4px;
  font-size: 30px;
  color: #111827;
}

.stat-card p {
  margin: 0;
  color: #9ca3af;
  font-size: 13px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-header h3 {
  margin: 0;
  color: #111827;
}

.card-header p {
  margin: 5px 0 0;
  color: #9ca3af;
  font-size: 13px;
}

.view-btn {
  border: none;
  background: transparent;
  color: #2563eb;
  font-weight: 600;
  cursor: pointer;
}

.match-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
}

.match-item:last-child {
  border-bottom: none;
}

.match-item div:first-child {
  display: flex;
  gap: 10px;
  align-items: center;
}

.match-item span {
  color: #9ca3af;
}

.match-time {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.match-time strong {
  color: #374151;
}

.match-time span {
  font-size: 13px;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 14px;
  border: 1px solid #e5e7eb;
  border-radius: 9px;
  background: #f9fafb;
  text-align: left;
  cursor: pointer;
}

.action-btn:hover {
  background: #f3f4f6;
}

.action-btn > span {
  font-size: 22px;
}

.action-btn div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.action-btn small {
  color: #9ca3af;
}

.tournament-list {
  display: flex;
  flex-direction: column;
}

.tournament-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
}

.tournament-row:last-child {
  border-bottom: none;
}

.tournament-row div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.tournament-row span {
  color: #9ca3af;
  font-size: 13px;
}

.status {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px !important;
  font-weight: 600;
}

.status.active {
  background: #dcfce7;
  color: #166534 !important;
}

.status.upcoming {
  background: #dbeafe;
  color: #1d4ed8 !important;
}

.status.completed {
  background: #f3f4f6;
  color: #6b7280 !important;
}

@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .match-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .match-time {
    text-align: left;
  }
}
</style>
