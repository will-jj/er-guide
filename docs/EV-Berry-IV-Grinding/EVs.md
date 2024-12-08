export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '5px',
    }}
>
    {children}
  </span>
);

## EV Grinding

With EVs enabled, Pokémon can receive up to 510 total points, with each stat. reaching a maximum of 255.

:::note
Enemy trainers do not have EVs, even on Brutal.		
:::

The most common, and only free way to earn EVs is through batlling trainers, all Pokémon in the party will gain EVs based upon their (non-neutral) natures as follows.  Due to this, if a Pokémon has a particularly poor nature it is best to change it as soon as possible.

### <Highlight color="#F00000">Boosted</Highlight>, <Highlight color="#0000FF">Hindered</Highlight>:

| Stat. | EVs |
|-------|-----|
| Boosted | 6 |
| Neutral | 4 |
| Hindered | 0 |

### All natures:

|Nature |HP |Atk|Def|Spd|Sp. Atk|Sp. Def|
|-------|---|---|---|---|-------|-------|
|ADAMANT|4  |6  |4  |4  |0     |4     |
|BASHFUL|6  |4  |2  |4  |4     |2     |
|BOLD   |4  |0  |6  |4  |4     |4     |
|BRAVE  |4  |6  |4  |0  |4     |4     |
|CALM   |4  |0  |4  |4  |4     |6     |
|CAREFUL|4  |4  |4  |4  |0     |6     |
|DOCILE |6  |4  |4  |4  |2     |2     |
|GENTLE |4  |4  |0  |4  |4     |6     |
|HARDY  |6  |2  |2  |4  |4     |4     |
|HASTY  |4  |4  |0  |6  |4     |4     |
|IMPISH |4  |4  |6  |4  |0     |4     |
|JOLLY  |4  |4  |4  |6  |0     |4     |
|LAX    |4  |4  |6  |4  |4     |0     |
|LONELY |4  |6  |0  |4  |4     |4     |
|MILD   |4  |4  |0  |4  |6     |4     |
|MODEST |4  |0  |4  |4  |6     |4     |
|NAIVE  |4  |4  |4  |6  |4     |0     |
|NAUGHTY|4  |6  |4  |4  |4     |0     |
|QUIET  |4  |4  |4  |0  |6     |4     |
|QUIRKY |2  |4  |4  |4  |4     |4     |
|RASH   |4  |4  |4  |4  |6     |0     |
|RELAXED|4  |4  |6  |0  |4     |4     |
|SASSY  |4  |4  |4  |0  |4     |6     |
|SERIOUS|6  |2  |4  |4  |2     |4     |
|TIMID  |4  |0  |4  |6  |4     |4     |

### Stat Boosting Items

Items can be bought, or found on routes which raise your Pokémon's EVs.

- **Vitamins** raise a stat. by 10 (assuming the 510 total is not hit), but stop working once the stat is 100 or above. 
- **Feathers** raise a stat by 1 and are only limited by the 510 total.				

### Stat Boosting Held Items

These are held items which give an additional EVs to your Pokémon holding them which were part of your party during trainer battles, care must be taken as your speed is halved:

|Item | EV Bonus |
|-----|-----------|
|Power Weight| 8 HP	|
|Power Bracer|	 8 Atk |	
|Power Belt|	8 Def	|
|Power Anklet| 8	Spd	|
|Power Lens |	8 Sp. Atk	|
|Power Band|	8 Sp. Def	|
|Macho Brace |	2 x EVs earned from battle |	

### Pokérus

Pokérus much like Macho Brace adds a 2x multiplier to your EV rewards (these two stack). It is however, much rarer, and the only way to get it in the HUB is through catching infected Pokémon in the Safari Zone (the Pokémon had to have already started with Pokerus when first caught in a run).													