# Job Tracker

Dashboard personal para seguir ofertas de empleo de LinkedIn, InfoJobs, Indeed y otras plataformas.

- **Perfil**: tus skills, las modalidades que aceptas y tu salario mínimo.
- **Encaje automático (0-100)**: el 70 % sale de las skills que aparecen en la oferta, el 15 % de la modalidad y el 15 % del salario.
  - ≥ 70: **Encaja** · 40–69: **Buena opción** · < 40: **Poco encaje**
- **Estados**: Guardada → Aplicada → Entrevista → Prueba técnica → Oferta / Rechazada / Descartada.
- Filtros por texto, estado y encaje; notas y fecha de última actualización en cada oferta.
- Exportar/importar JSON como copia de seguridad.

## Uso

Abre `index.html` en el navegador. No necesita instalar nada.

Para tenerlo online, activa GitHub Pages (Settings → Pages → rama `main`).

Los datos se guardan en el `localStorage` de cada navegador: no se suben al repo ni se sincronizan entre dispositivos. Usa *Exportar JSON* para hacer copias.

## Test

```bash
node test.js
```
