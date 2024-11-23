const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Sin,
		C3.Behaviors.Pathfinding,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.TileMovement,
		C3.Behaviors.Follow,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{Sine: 0},
	{Pathfinding: 0},
	{TiledBackground: 0},
	{Solid: 0},
	{wall: 0},
	{TileMovement: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Follow: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{apple: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	wall: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {}
}