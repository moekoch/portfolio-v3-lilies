Add "lilies.glb" here to swap in the real Sketchfab model in the hero.
Source: https://sketchfab.com/3d-models/lilies-45755df496804cb7a36f6f32305b57a7
By sligocreatures, licensed CC BY 4.0. Attribution is already rendered in the hero (Hero3D.tsx).

Steps:
1. Sketchfab model page -> Download 3D Model -> glTF format.
2. Compress with gltf-transform (Draco + resize textures to <=1K).
3. Save the result as lilies.glb in this folder.

If this file is absent, the hero falls back to the built-in procedural flowers automatically.
