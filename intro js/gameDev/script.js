/*<div class="fighter">

        </div>

        <div class="action">

        </div>

        <div class="Warrior">

        </div>

        <div class="arena">

        </div>

        <div class="enemy">

</div>

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 1fr 0.5fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "header header header header header"
      "fighter fighter fighter fighter fighter"
      "action action action action action"
      "arena arena arena arena arena"
      "enemy enemy enemy enemy enemy";
}
  
.header { grid-area: header; }

.action { grid-area: action; }

.fighter { grid-area: fighter; }

.arena { grid-area: arena; }

.enemy { grid-area: enemy; } */