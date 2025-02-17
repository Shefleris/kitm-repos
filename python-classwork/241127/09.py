#rasti pirma zodi, kuris prasideda tam tikra raide

txt = 'Labas rytas suraitytas stipriai labas rytas'
raide = 'b'
zodziai = txt.split()

pirmas = next((zodis for zodis in zodziai if zodis.lower().startswith(raide)),'Tokio zodzio nera')
print(pirmas)