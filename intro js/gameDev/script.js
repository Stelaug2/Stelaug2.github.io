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

/*.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "Header Header Header"
      "char1 char1 char1"
      "char2 char2 char2"
      "char3 char3 char3"
      "char4 char4 char4"
      "footer footer footer";
}
  
.Header { grid-area: Header; }
  
.char1 { grid-area: char1; }
  
.char2 { grid-area: char2; }
  
.char3 { grid-area: char3; }
  
.char4 { grid-area: char4; }
  
.footer { grid-area: footer; }

<div class="container">

        <div class="Header">
            <h1>Choose your fighter!</h1>
        </div>

        <div class="char1">
            
        </div>

        <div class="char2">
           
        </div>

        <div class="char3">
            
        </div>

        <div class="char4">
            
        </div>

        <div class="footer"></div>

    </div>*/ 